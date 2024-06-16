import { Module } from '@nestjs/common';
import { PlanningsService } from './plannings.service';
import { PlanningsController } from './plannings.controller';

@Module({
  providers: [PlanningsService],
  controllers: [PlanningsController]
})
export class PlanningsModule {}
