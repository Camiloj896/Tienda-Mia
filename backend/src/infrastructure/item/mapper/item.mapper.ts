import ItemDTO from './../../../domain/item/dto/item.dto';
import { ItemEntity } from '../adapter/entity/item.entity';

export default class ItemMapper {

    public static toDomain(itemEntity: ItemEntity): ItemDTO {
        
        const item = new ItemDTO();

        item.id = itemEntity.id;
        item.title = itemEntity.title;
        item.description = itemEntity.description;
        item.url = itemEntity.url;
        item.price = itemEntity.price;
        item.quantity = itemEntity.quantity;
        
        return item;

    }
   
    public static toDomains(itemEntity: ItemEntity[]): ItemDTO[] {
        const items = new Array<ItemDTO>();
        itemEntity.forEach( (obj) => {
            const item = this.toDomain(obj);
            items.push(item);
        });
        return items;
    }

}