import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuarios } from './entity/teste.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TesteNuclearService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly dbRepository: Repository<Usuarios>,
  ) {}

  async searchAll() {
    return await this.dbRepository.find();
  }

  async create(data: Usuarios) {
    return await this.dbRepository.save(this.dbRepository.create(data));
  }

  async searchByIdOrFail(id: string) {
    try {
      return (await this.dbRepository.findBy({ id })).find(
        (elem) => elem.id == id,
      );
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async deletebyId(id: string) {
    await this.searchByIdOrFail(id);
    return await this.dbRepository.delete({ id });
  }

  async updateById(id: string, data: Usuarios) {
    const fetchData = await this.dbRepository.findOne({ where: { id } });

    const getFirstElement = fetchData;
    this.dbRepository.merge(getFirstElement, data);

    return await this.dbRepository.save(fetchData);
  }
}
