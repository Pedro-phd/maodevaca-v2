import { Injectable } from '@nestjs/common';
import { CreateTagDTO } from './dto/create-tag.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDecorator } from 'src/decorators/user.decorator';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  async listAll(user: UserDecorator) {
    return await this.prisma.tag.findMany({
      where: {
        userId: user.id,
      },
    });
  }

  async create(data: CreateTagDTO, user: UserDecorator) {
    await this.prisma.tag.create({
      data: {
        name: data.name,
        userId: user.id,
      },
    });
  }
}
