import { Injectable } from '@nestjs/common';
import OrderDTO from '../../domain/order/dto/order.dto';
import OrderService from '../../domain/order/service/order.service';

@Injectable()
export default class GetAllOrdersUseCase {

  constructor(private orderService: OrderService) {}

  /**
   * @returns all `Order` object containing the data.
   */
  public async handler(): Promise<OrderDTO[]> {
    return await this.orderService.getAll();
  }

}