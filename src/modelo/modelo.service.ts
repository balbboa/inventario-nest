import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Modelo } from './modelo.entity';

@Injectable()
export class ModeloService {
  constructor(
    @InjectRepository(Modelo)
    private modeloRepository: Repository<Modelo>,
  ) {}

  async findAll(): Promise<Modelo[]> {
    return await this.modeloRepository.find();
  }

  async findOne(id: number): Promise<Modelo> {
    return await this.modeloRepository.findOne({ where: { id } });
  }

  async create(modelo: Modelo): Promise<Modelo> {
    return await this.modeloRepository.save(modelo);
  }

  async update(id: number, modelo: Modelo): Promise<void> {
    await this.modeloRepository.update(id, modelo);
  }

  async delete(id: number): Promise<void> {
    await this.modeloRepository.delete(id);
  }
}
