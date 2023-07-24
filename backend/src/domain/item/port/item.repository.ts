import ItemDTO from '../dto/item.dto';

export abstract class ItemRepository {

    /**
   * @returns all `items` object containing the data.
   */
   abstract getAll(): Promise<ItemDTO[]>;

    /**
   * @param {number} id
   * @returns a `item` object containing the data filtered by id.
   */
  abstract get(id: number): Promise<ItemDTO>;

    /**
   * @param {object} ItemDTO
   * @returns a `item` object containing the data.
   */
  abstract create(item: ItemDTO): Promise<ItemDTO>;

    /**
   * @param {number} id
   * @param {object} ItemDTO
   * @returns a `item` object containing the data and status code.
   */
  abstract update(id: number, item: ItemDTO): Promise<any>;

    /**
   * @param {number} id
   * @returns a `status` code.
   */
  abstract delete(id: number): Promise<any>;
  
}