import { Module } from '@nestjs/common';
import { GroupsModule } from './api/v1/groups/groups.module';
import { ManufacturersModule } from './api/v1/manufacturers/manufacturers.module';
import { ModelsModule } from './api/v1/models/models.module';
import { OpmsModule } from './api/v1/opms/opms.module';

@Module({
  imports: [ModelsModule, ManufacturersModule, OpmsModule, GroupsModule],
  controllers: [],
  providers: []
})
export class AppModule {}
