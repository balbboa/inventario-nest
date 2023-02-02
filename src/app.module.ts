import { Module } from '@nestjs/common';
import { ManufacturersModule } from './api/v1/manufacturers/manufacturers.module';
import { ModelsModule } from './api/v1/models/models.module';

@Module({
  imports: [ModelsModule, ManufacturersModule],
  controllers: [],
  providers: []
})
export class AppModule {}
