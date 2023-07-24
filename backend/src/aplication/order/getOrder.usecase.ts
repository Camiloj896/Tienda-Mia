import { Injectable } from '@nestjs/common';
import OrderDTO from '../../domain/order/dto/order.dto';
import OrderService from '../../domain/order/service/order.service';

@Injectable()
export default class GetOrderUseCase {

  constructor(private orderService: OrderService) {}

  /**
   * @param {number} id
   * @returns a `Order` object containing the data filtered by id.
   */
  public async handler(id: number): Promise<OrderDTO> {
    return await this.orderService.get(id);
  }

}