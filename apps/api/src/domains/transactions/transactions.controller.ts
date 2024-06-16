import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { User, UserDecorator } from 'src/decorators/user.decorator';
import { TransactionsService } from './transactions.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTransactionDTO } from './dto/create-transaction.dto';

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@ApiTags('Transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private transactionService: TransactionsService) {}

  @Get('/')
  @ApiOperation({
    summary: 'Return all transaction for current month',
  })
  async findAll(@User() user: UserDecorator) {
    return await this.transactionService.findAll(user);
  }

  @Get('/month/:month')
  async perMonth(@Param('month') month: string, @User() user: UserDecorator) {
    return await this.transactionService.perMonth(month, user);
  }

  @Post('/new')
  @ApiBody({
    type: CreateTransactionDTO,
  })
  async create(
    @Body() body: CreateTransactionDTO,
    @User() user: UserDecorator,
  ) {
    return await this.transactionService.create(body, user);
  }
}
