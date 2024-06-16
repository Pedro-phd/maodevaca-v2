import { Module } from '@nestjs/common';
import { UsersModule } from './domains/users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { TransactionsModule } from './domains/transactions/transactions.module';
import { PlanningsModule } from './domains/plannings/plannings.module';
import { TagsModule } from './domains/tags/tags.module';
import { JwtConfigModule } from './jwt-config/jwt-config.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    TransactionsModule,
    PlanningsModule,
    TagsModule,
    JwtConfigModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
