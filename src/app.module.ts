import { Module } from '@nestjs/common';
import { GroupsModule } from './api/v1/groups/groups.module';
import { ItemsModule } from './api/v1/items/items.module';
import { ManufacturersModule } from './api/v1/manufacturers/manufacturers.module';
import { ModelsModule } from './api/v1/models/models.module';
import { OpmsModule } from './api/v1/opms/opms.module';
import { StatusModule } from './api/v1/status/status.module';

@Module({
  imports: [
    ModelsModule,
    ManufacturersModule,
    OpmsModule,
    GroupsModule,
    ItemsModule,
    StatusModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
