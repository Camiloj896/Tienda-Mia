import { Injectable } from '@nestjs/common';
import ItemDTO from '../dto/item.dto';

import { ItemRepository } from '../port/item.repository';
import { FieldRequiredJson } from './fieldrequired';

import { FieldRequire } from '../../exceptions/field-required';

@Injectable()
export default class ItemService { 

    constructor(private itemRepository: ItemRepository) {}

    /**
   * @returns all `items` object containing the data.
   */
    async getAll(): Promise<ItemDTO[]> {  
      const items = await this.itemRepository.getAll();     
      return items;
    }
    
    /**
   * @param {number} id
   * @returns a `item` object containing the data filtered by id.
   */
    async get(id: number): Promise<ItemDTO> {
      const item = await this.itemRepository.get(id);
      return item;
    }

    /**
   * @param {object} ItemDTO
   * @returns a `item` object containing the data.
   */
    async create(itemDTO: ItemDTO): Promise<ItemDTO> {

      for (const key in FieldRequiredJson) {
        if (!itemDTO.hasOwnProperty(key)) {
          throw new FieldRequire(
            `the field \'${key}\' is required`,
          );
        }
      }

      const item = await this.itemRepository.create(itemDTO);
      return item;

    }

    /**
   * @param {number} id
   * @param {object} ItemDTO
   * @returns a `item` object containing the data and status code.
   */
    async update(id: number, itemDTO: ItemDTO): Promise<any> {     

      for (const key in FieldRequiredJson) {
        if (!itemDTO.hasOwnProperty(key)) {
          throw new FieldRequire(
            `the field \'${key}\' is required`,
          );
        }
      }

        const item = await this.itemRepository.update(id, itemDTO);
        return item;

    }

    /**
   * @param {number} id
   * @returns a `status` code.
   */
    async delete(id: number): Promise<any> {
      const item = await this.itemRepository.delete(id);
      return item;
    }

}