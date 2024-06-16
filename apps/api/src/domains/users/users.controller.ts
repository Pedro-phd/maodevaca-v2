import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User, UserDecorator } from 'src/decorators/user.decorator';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async user(@User() user: UserDecorator) {
    return await this.usersService.findUser(user);
  }

  @Post('/new')
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() data: CreateUserDTO) {
    await this.usersService.createUser(data);
  }
}
