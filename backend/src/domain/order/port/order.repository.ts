import OrderDTO from '../dto/order.dto';

export abstract class OrderRepository {

    /**
   * @returns all `orders` object containing the data.
   */
   abstract getAll(): Promise<OrderDTO[]>;

    /**
   * @param {number} id
   * @returns a `order` object containing the data filtered by id.
   */
  abstract get(id: number): Promise<OrderDTO>;

    /**
   * @param {object} OrderDTO
   * @returns a `order` object containing the data.
   */
  abstract create(order: OrderDTO): Promise<OrderDTO>;

    /**
   * @param {number} id
   * @param {object} OrderDTO
   * @returns a `order` object containing the data and status code.
   */
  abstract update(id: number, order: OrderDTO): Promise<any>;

    /**
   * @param {number} id
   * @returns a `status` code.
   */
  abstract delete(id: number): Promise<any>;
  
}