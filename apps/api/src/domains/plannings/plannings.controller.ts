import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { PlanningsService } from './plannings.service';
import { User, UserDecorator } from 'src/decorators/user.decorator';
import { AddMemberDto } from './dto/add-member.dto';

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('plannings')
@ApiTags('Plannings')
export class PlanningsController {
  constructor(private planningService: PlanningsService) {}

  @Get('/')
  async findAll(@User() user: UserDecorator) {
    return await this.planningService.findAll(user);
  }

  @Get('/:planningId/transactions')
  async findAllTransactions(
    @Param('planningId') planningId: string,
    @User() user: UserDecorator,
  ) {
    return await this.planningService.findAllTransactions(planningId, user);
  }

  @ApiBody({
    type: [AddMemberDto],
  })
  @Post('/:planningId/members')
  async addMember(
    @Body() body: AddMemberDto,
    @Param('planningId') planningId: string,
    @User() user: UserDecorator,
  ) {
    await this.planningService.addMember(body, planningId, user);
  }
}
