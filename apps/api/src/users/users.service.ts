import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { hash } from 'bcrypt';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAllUsers() {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
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
