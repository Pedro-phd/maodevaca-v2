import { Injectable } from '@nestjs/common';
import { UserDecorator } from 'src/decorators/user.decorator';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';
import { format, lastDayOfMonth } from 'date-fns';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateTransactionDTO, user: UserDecorator) {
    await this.prisma.transaction.create({
      data: {
        amount: body.amount,
        description: body.description,
        type: body.type,
        paymentDate: body.paymentDate,
        tagsId: body.tags,
        planningId: body.planningId,
        ownerId: user.id,
      },
    });
  }
  async findAll(user: UserDecorator) {
    const today = new Date();
    const firstDay = new Date(format(today, 'yyyy-MM-01'));
    const lastDay = lastDayOfMonth(today);

    return await this.prisma.transaction.findMany({
      where: {
        ownerId: user.id,
        paymentDate: {
          lte: lastDay,
          gte: firstDay,
        },
      },
    });
  }

  async perMonth(month: string, user: UserDecorator) {
    const monthInt = parseInt(month);
    if (monthInt > 12 || monthInt < 1) {
      return Promise.resolve([]);
    }

    const today = new Date();
    today.setMonth(monthInt);
    const firstDay = new Date(format(today, `yyyy-${month}-01`));
    const lastDay = lastDayOfMonth(today);

    return await this.prisma.transaction.findMany({
      where: {
        ownerId: user.id,
        paymentDate: {
          lte: lastDay,
          gte: firstDay,
        },
      },
    });
  }
}
