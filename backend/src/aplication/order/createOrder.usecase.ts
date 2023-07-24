import { Injectable } from '@nestjs/common';
import OrderDTO from '../../domain/order/dto/order.dto';
import OrderService from '../../domain/order/service/order.service';

@Injectable()
export default class CreateOrderUseCase {

  constructor(private orderService: OrderService) {}

  /**
   * @param {object} OrderDTO
   * @returns a `Order` object containing the data.
   */
  public async handler(order: OrderDTO): Promise<OrderDTO> {
    return await this.orderService.create(order);
  }

}