import { Injectable } from '@nestjs/common';
import OrderService from '../../domain/order/service/order.service';

@Injectable()
export default class DeleteOrderUseCase {

    constructor(private orderSercive: OrderService) {}

    /**
     * @param {number} id
     * @returns a `Order` code.
     */
    public async handler(id: number): Promise<any> {
        await this.orderSercive.get(id);
        return await this.orderSercive.delete(id);
    }

}