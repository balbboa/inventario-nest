import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
// DTO
import { OpmDTO } from './opms.dto';
// Services
import { OpmsDeleteService } from './services/opm.delete.service';
import { OpmsFindAllService } from './services/opm.findAll.service';
import { OpmsFindOneService } from './services/opm.findOne.service';
import { OpmsUpdateService } from './services/opm.update.service';
import { OpmsCreateService } from './services/opms.create.service';

@Controller({
  path: 'opms',
  version: '1'
})
export class OpmController {
  constructor(
    private readonly createService: OpmsCreateService,
    private readonly updateService: OpmsUpdateService,
    private readonly deleteService: OpmsDeleteService,
    private readonly findOneService: OpmsFindOneService,
    private readonly findAllService: OpmsFindAllService
  ) {}

  @Post()
  async create(@Body() data: OpmDTO) {
    return this.createService.create(data);
  }

  @Get()
  async findAll() {
    return this.findAllService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.findOneService.findOne(Number(id));
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() data: OpmDTO) {
    return this.updateService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.deleteService.delete(Number(id));
  }
}
