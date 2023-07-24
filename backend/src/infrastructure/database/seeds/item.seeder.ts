import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { ItemEntity } from '../../item/adapter/entity/item.entity';

export default class ItemSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const repository =  dataSource.getRepository(ItemEntity);
        await repository.insert([
            {
                title: 'This is static title #1.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 45655,
                quantity: 2
            },
            {
                title: 'This is static title #2.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 5765,
                quantity: 10
            },
            {
                title: 'This is static title #3.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 456456,
                quantity: 3
            },
            {
                title: 'This is static title #4.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 8545,
                quantity: 1
            },
            {
                title: 'This is static title #5.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 4556,
                quantity: 3
            },
            {
                title: 'This is static title #6.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 6885,
                quantity: 4
            },
            {
                title: 'This is static title #7.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 68884,
                quantity: 3
            },
            {
                title: 'This is static title #8.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 458885,
                quantity: 5
            },
            {
                title: 'This is static title #9.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 4411,
                quantity: 2
            },
            {
                title: 'This is static title #10.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 2222,
                quantity: 10
            },
            {
                title: 'This is static title #11.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 45655,
                quantity: 2
            },
            {
                title: 'This is static title #12.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 5765,
                quantity: 10
            },
            {
                title: 'This is static title #13.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 456456,
                quantity: 3
            },
            {
                title: 'This is static title #14.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 8545,
                quantity: 1
            },
            {
                title: 'This is static title #15.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 4556,
                quantity: 3
            },
            {
                title: 'This is static title #16.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 6885,
                quantity: 4
            },
            {
                title: 'This is static title #17.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 68884,
                quantity: 3
            },
            {
                title: 'This is static title #18.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 458885,
                quantity: 5
            },
            {
                title: 'This is static title #19.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 4411,
                quantity: 2
            },
            {
                title: 'This is static title #20.',
                description: 'this is static description',
                url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                price: 2222,
                quantity: 10
            }
        ]);
    }
}