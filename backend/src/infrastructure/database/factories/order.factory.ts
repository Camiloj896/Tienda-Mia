import { setSeederFactory } from 'typeorm-extension';
import { OrderEntity } from '../../order/adapter/entity/order.entity';

export default setSeederFactory(OrderEntity, (faker) => {

    const order = new OrderEntity();
    order.cliente = faker.person.firstName();
    order.shippingAddress = faker.location.direction();
    order.shippingPromise = faker.date.anytime();

    return order;
})
