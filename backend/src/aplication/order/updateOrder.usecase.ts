import { Injectable } from '@nestjs/common';
import OrderDTO from '../../domain/order/dto/order.dto';
import OrderService from '../../domain/order/service/order.service';

@Injectable()
export default class UpdateOrderUseCase {

  constructor(private orderService: OrderService) {}

  /**
   * @param {number} id
   * @param {object} OrderDTO
   * @returns a `Order` object containing the data and Order code.
   */
  public async handler(id: number, order: OrderDTO): Promise<any> {
    await this.orderService.get(id);
    return await this.orderService.update(id, order);
  }

}