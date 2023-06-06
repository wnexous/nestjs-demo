import { Test, TestingModule } from '@nestjs/testing';
import { TesteNuclearService } from './teste-nuclear.service';

describe('TesteNuclearService', () => {
  let service: TesteNuclearService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TesteNuclearService],
    }).compile();

    service = module.get<TesteNuclearService>(TesteNuclearService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
