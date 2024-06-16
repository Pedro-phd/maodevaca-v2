import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { hash } from 'bcrypt';
import { Prisma } from '@prisma/client';
import { UserDecorator } from 'src/decorators/user.decorator';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findUser(user: UserDecorator) {
    return await this.prisma.user.findFirst({
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
      },
      where: {
        id: user.id,
      },
    });
  }

  async createUser(data: CreateUserDTO) {
    const hashPassword = await hash(data.password, 4);
    await this.prisma.user.create({
      data: {
        ...data,
        password: hashPassword,
      },
    });
  }

  async findBy(filter: Prisma.UserFindFirstArgs) {
    return await this.prisma.user.findFirst(filter);
  }
}
