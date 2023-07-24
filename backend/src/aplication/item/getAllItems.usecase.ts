import { Injectable } from '@nestjs/common';
import ItemDTO from '../../domain/item/dto/item.dto';
import ItemService from '../../domain/item/service/item.service';

@Injectable()
export default class GetAllItemUseCase {

  constructor(private itemService: ItemService) {}

  /**
   * @returns all `Item` object containing the data.
   */
  public async handler(): Promise<ItemDTO[]> {
    return await this.itemService.getAll();
  }

}