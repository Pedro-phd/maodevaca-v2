import { Test, TestingModule } from '@nestjs/testing';
import { PlanningsController } from './plannings.controller';

describe('PlanningsController', () => {
  let controller: PlanningsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanningsController],
    }).compile();

    controller = module.get<PlanningsController>(PlanningsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
