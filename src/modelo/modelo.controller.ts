import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ModeloService } from './modelo.service';
import { Modelo } from './modelo.entity';

@Controller('modelo')
export class ModeloController {
  constructor(private modeloService: ModeloService) {}

  @Get()
  async findAll(): Promise<Modelo[]> {
    return;
    this.modeloService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Modelo> {
    return this.modeloService.findOne(id);
  }

  @Post()
  async create(@Body() modelo: Modelo): Promise<Modelo> {
    return this.modeloService.create(modelo);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() modelo: Modelo): Promise<void> {
    return this.modeloService.update(id, modelo);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.modeloService.delete(id);
  }
}
