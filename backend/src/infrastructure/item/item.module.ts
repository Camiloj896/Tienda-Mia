import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import ItemService from './../../domain/item/service/item.service';
import { ItemRepository } from './../../domain/item/port/item.repository';

import GetAllItemsUseCase from './../../aplication/item/getAllItems.usecase';
import GetItemUseCase from './../../aplication/item/getItem.usecase';
import CreateItemUseCase from './../../aplication/item/createItem.usecase';
import UpdateItemUseCase from './../../aplication/item/updateItem.usecase';
import DeleteItemUseCase from './../../aplication/item/deleteItem.usecase';

import { ItemController } from './controller/item.controller';
import { ItemEntity } from './adapter/entity/item.entity';
import ItemRepositoryImpl from './adapter/repository/item.repository';

const repositoryItemProvider = {
  provide: ItemRepository,
  useClass: ItemRepositoryImpl,
};

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  providers: [
    GetAllItemsUseCase,
    GetItemUseCase,
    CreateItemUseCase,
    UpdateItemUseCase,
    DeleteItemUseCase,
    ItemService,
    repositoryItemProvider
  ],
  controllers: [ItemController],
  exports: []
})

export class ItemModule {}
