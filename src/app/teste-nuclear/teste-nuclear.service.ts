import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuarios } from './entity/teste.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TesteNuclearService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly dbRepository: Repository<Usuarios>,
  ) {}

  async searchAll() {}

  async searchOne() {}

  async create() {}

async deletebyId() {}
}
