import { Module } from '@nestjs/common';
import { ItemsService } from './services/items/items.service';
import { ItemsController } from './controllers/items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item])
  ],
  providers: [
    ItemsService
  ],
  controllers: [
    ItemsController
  ]
})
export class ItemsModule {}
