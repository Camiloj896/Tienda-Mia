import { setSeederFactory } from 'typeorm-extension';
import { ItemEntity } from '../../item/adapter/entity/item.entity';

export default setSeederFactory(ItemEntity, (faker) => {
    const item = new ItemEntity();
    item.title = faker.helpers.fake(`This is static title # ${Math.floor(Math.random()*10)}.`);
    item.description = faker.word.conjunction();
    item.url = faker.helpers.fake('www.link-item.com');
    item.price = faker.number.int();
    item.quantity = faker.number.int();

    return item;
})