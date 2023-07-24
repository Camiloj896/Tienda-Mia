import { Injectable } from '@nestjs/common';
import ItemDTO from '../../domain/item/dto/item.dto';
import ItemService from '../../domain/item/service/item.service';

@Injectable()
export default class GetItemUseCase {

  constructor(private itemService: ItemService) {}

  /**
   * @param {number} id
   * @returns a `Item` object containing the data filtered by id.
   */
  public async handler(id: number): Promise<ItemDTO> {
    return await this.itemService.get(id);
  }

}