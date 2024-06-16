import { BadRequestException, Injectable } from '@nestjs/common';
import { UserDecorator } from 'src/decorators/user.decorator';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddMemberDto } from './dto/add-member.dto';

@Injectable()
export class PlanningsService {
  constructor(private prisma: PrismaService) {}

  async addMember(body: AddMemberDto, planningId: string, user: UserDecorator) {
    const userToAdd = await this.prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      throw new BadRequestException('This email does not belong to any user');
    }
    await this.prisma.planning.update({
      data: {
        members: {
          create: {
            userId: userToAdd.id,
          },
        },
      },
      where: {
        id: planningId,
        members: {
          every: {
            userId: user.id,
          },
        },
      },
    });
  }
  async findAllTransactions(planningId: string, user: UserDecorator) {
    return await this.prisma.transaction.findMany({
      where: {
        planningId: planningId,
        planning: {
          members: {
            some: {
              userId: user.id,
            },
          },
        },
      },
      include: {
        user: {
          select: {
            name: true,
            avatarUrl: true,
            email: true,
          },
        },
      },
    });
  }
  async findAll(user: UserDecorator) {
    return await this.prisma.planning.findMany({
      where: {
        members: {
          some: {
            userId: user.id,
          },
        },
      },
    });
  }
}
