import { Injectable } from '@nestjs/common';
import ItemDTO from '../../domain/item/dto/item.dto';
import ItemService from '../../domain/item/service/item.service';

@Injectable()
export default class CreateItemUseCase {

  constructor(private itemService: ItemService) {}

  /**
   * @param {object} ItemDTO
   * @returns a `Item` object containing the data.
   */
  public async handler(item: ItemDTO): Promise<ItemDTO> {
    return await this.itemService.create(item);
  }

}