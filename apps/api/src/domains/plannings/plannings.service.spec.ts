import { Test, TestingModule } from '@nestjs/testing';
import { PlanningsService } from './plannings.service';

describe('PlanningsService', () => {
  let service: PlanningsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanningsService],
    }).compile();

    service = module.get<PlanningsService>(PlanningsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
