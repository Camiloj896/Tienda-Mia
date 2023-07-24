/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Post, Get, Put, Delete, Param, Res, Body, HttpStatus } from '@nestjs/common';
import ItemDTO from '../../../domain/item/dto/item.dto';
import GetAllItemsUseCase from './../../../aplication/item/getAllItems.usecase';
import GetItemUseCase from './../../../aplication/item/getItem.usecase';
import CreateItemUseCase from './../../../aplication/item/createItem.usecase';
import UpdateItemUseCase from './../../../aplication/item/updateItem.usecase';
import DeleteItemUseCase from './../../../aplication/item/deleteItem.usecase';


@Controller('api/items')
export class ItemController {
  
    constructor( 
        private getAllItemsUseCase: GetAllItemsUseCase,
        private getItemUseCase: GetItemUseCase,
        private createItemUseCase: CreateItemUseCase,
        private updateItemUseCase: UpdateItemUseCase,
        private deleteItemUseCase: DeleteItemUseCase,
    ) {}

    /**
   * @returns all `Items` object containing the data.
   */
    @Get()
    async getAll(@Res() request): Promise<ItemDTO[]> {    
        const items = await this.getAllItemsUseCase.handler();
        return request.status(HttpStatus.OK).json(items);
    }

    /**
     * @param {number} id
     * @returns a `Item` object containing the data filtered by id.
     */
    @Get(':id')
    async get(@Res() request, @Param('id') id: number): Promise<ItemDTO> {
        const item = await this.getItemUseCase.handler(id);
        return request.status(HttpStatus.OK).json(item);
    }

    /**
     * @param {object} ItemDTO
     * @returns a `Item` object containing the data.
     */
    @Post()
    async create(@Res() request, @Body() itemDto: ItemDTO): Promise<ItemDTO> {
        const item = await this.createItemUseCase.handler(itemDto);
        return request.status(HttpStatus.CREATED).json(item);
    }

    /**
     * @param {number} id
     * @param {object} ItemDTO
     * @returns a `Item` object containing the data and status code.
     */
    @Put(':id')
    async update(@Res() request, @Body() itemDto: ItemDTO, @Param('id') id: number): Promise<any> {
        const item = await this.updateItemUseCase.handler(id, itemDto);
        return request.status(HttpStatus.OK).json(item);
    }

    /**
   * @param {number} id
   * @returns a `staus` code.
   */
    @Delete(':id')
    async delete(@Res() request, @Param('id') id: number): Promise<any> {
        const item = await this.deleteItemUseCase.handler(id);
        return request.status(HttpStatus.OK).json(item);
    }

}
