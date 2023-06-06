import { Test, TestingModule } from '@nestjs/testing';
import { TesteNuclearController } from './teste-nuclear.controller';

describe('TesteNuclearController', () => {
  let controller: TesteNuclearController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TesteNuclearController],
    }).compile();

    controller = module.get<TesteNuclearController>(TesteNuclearController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
