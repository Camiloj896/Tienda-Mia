import OrderDTO from '../../../domain/order/dto/order.dto';
import { OrderEntity } from '../adapter/entity/order.entity';

export default class OrderMapper {

    public static toDomain(orderEntity: OrderEntity): OrderDTO {
        
        const order = new OrderDTO();

        order.id = orderEntity.id;
        order.createDate = orderEntity.createDate;
        order.status = orderEntity.status;
        order.cliente = orderEntity.cliente;
        order.shippingAddress = orderEntity.shippingAddress;
        order.shippingPromise = orderEntity.shippingPromise;
        order.items = orderEntity.items;
        
        return order;

    }
   
    public static toDomains(orderEntity: OrderEntity[]): OrderDTO[] {
        const orders = new Array<OrderDTO>();
        orderEntity.forEach( (obj) => {
            const order = this.toDomain(obj);
            orders.push(order);
        });
        return orders;
    }

}