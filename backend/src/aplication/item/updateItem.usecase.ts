import { Injectable } from '@nestjs/common';
import ItemDTO from '../../domain/item/dto/item.dto';
import ItemService from '../../domain/item/service/item.service';

@Injectable()
export default class UpdateItemUseCase {

  constructor(private itemService: ItemService) {}

  /**
   * @param {number} id
   * @param {object} ItemDTO
   * @returns a `Item` object containing the data and Item code.
   */
  public async handler(id: number, item: ItemDTO): Promise<any> {
    await this.itemService.get(id);
    return await this.itemService.update(id, item);
  }

}