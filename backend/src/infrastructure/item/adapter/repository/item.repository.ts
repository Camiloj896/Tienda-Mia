import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemEntity } from '../entity/item.entity';
import { ItemRepository } from './../../../../domain/item/port/item.repository';
import ItemDTO from './../../../../domain/item/dto/item.dto';
import ItemMapper from '../../mapper/item.mapper';

import { CatchError } from '../../../../domain/exceptions/catch-error';
import { DataMissing } from '../../../../domain/exceptions/data-missing';

@Injectable()
export default class ItemRepositoryImpl implements ItemRepository {

    constructor(@InjectRepository(ItemEntity) private itemRepository: Repository<ItemEntity>){}

    /**
   * @returns all `Items` object containing the data.
   */
    async getAll(): Promise<ItemEntity[]> {
        
        try {

            const items = await this.itemRepository.find();    
            return ItemMapper.toDomains(items);
            
        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }


    }
    
    /**
   * @param {number} id
   * @returns a `Item` object containing the data filtered by id.
   */
    async get(id: number): Promise<ItemEntity> {
        
        try {

            const item = await this.itemRepository.findOneBy({id});
            
            if (item === undefined) {
                throw new DataMissing(
                  `the item with ${id} does not exist`,
                );
            }

            return ItemMapper.toDomain(item);
            
        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }

    }

    /**
   * @param {object} ItemDTO
   * @returns a `Item` object containing the data.
   */
    async create(ItemDto: ItemDTO): Promise<ItemEntity> {    
        
        try {

            const item = await this.itemRepository.save(ItemDto);
            return ItemMapper.toDomain(item);
            
        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }

    }

    /**
   * @param {number} id
   * @param {object} ItemDTO
   * @returns a `Item` object containing the data and status code.
   */
    async update(id: number, itemDto: ItemDTO): Promise<any> {
        
        try {

            await this.itemRepository.update(id, itemDto);

            const item = await this.itemRepository.findOneBy({id});;
    
            const res = {
                statusCode: 201,            
                message: 'The item has been updated',
                data: item
            };
    
            return res;
            
        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }


    }

    /**
   * @param {number} id
   * @returns a `staus` code.
   */
    async delete(id: number): Promise<any> {

        try {
            
            await this.itemRepository.delete(id);
    
            const res = {
                statusCode: 200,            
                message: 'the item has been deleted'
            };
    
            return res;

        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }

    }

}

