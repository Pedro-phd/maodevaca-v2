import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { TagsService } from './tags.service';
import { CreateTagDTO } from './dto/create-tag.dto';
import { User, UserDecorator } from 'src/decorators/user.decorator';

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('tags')
@ApiTags('Tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Post('/new')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() data: CreateTagDTO, @User() user: UserDecorator) {
    return this.tagsService.create(data, user);
  }

  @Get('/')
  async listAll(@User() user: UserDecorator) {
    return this.tagsService.listAll(user);
  }
}
