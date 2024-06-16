import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, JwtModule],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
