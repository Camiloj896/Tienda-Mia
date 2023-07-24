import { Injectable } from '@nestjs/common';
import ItemService from '../../domain/item/service/item.service';

@Injectable()
export default class DeleteItemUseCase {

    constructor(private itemSercive: ItemService) {}

    /**
     * @param {number} id
     * @returns a `Item` code.
     */
    public async handler(id: number): Promise<any> {
        await this.itemSercive.get(id);
        return await this.itemSercive.delete(id);
    }

}