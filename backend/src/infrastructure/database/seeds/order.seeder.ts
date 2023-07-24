import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { OrderEntity } from '../../order/adapter/entity/order.entity';

export default class OrderSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {

        const repository =  dataSource.getRepository(OrderEntity);
        await repository.insert([
            {
                status: {
                    id: 1,
                    name: 'Approve'
                },
                cliente: "lorem ipsum",
                shippingAddress: 'Cll 65 sur # 56 -90',
                shippingPromise: '2023-07-24',
                createDate: '2023-07-28',
                items: [
                    {
                        id: 1,
                        title: 'This is static title #1.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 45655,
                        quantity: 2
                    },
                    {
                        id: 2,
                        title: 'This is static title #2.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 5765,
                        quantity: 10
                    },
                ]
            },
            {
                status: {
                    id: 4,
                    name: 'Traveling'
                },
                cliente: "lorem ipsum",
                shippingAddress: 'Cll 65 sur # 56 -90',
                shippingPromise: '2023-07-27',
                createDate: '2023-07-28',
                items: [
                    {
                        id: 3,
                        title: 'This is static title #3.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 456456,
                        quantity: 3
                    },
                    {
                        id: 4,
                        title: 'This is static title #4.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 8545,
                        quantity: 1
                    },
                    {
                        id: 5,
                        title: 'This is static title #5.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 4556,
                        quantity: 3
                    },
                ]
            },
            {
                status: {
                    id: 3,
                    name: 'Delivery'
                },
                cliente: "lorem ipsum",
                shippingAddress: 'Cll 65 sur # 56 -90',
                shippingPromise: '2023-07-24',
                createDate: '2023-07-28',
                items: [
                    {
                        id: 6,
                        title: 'This is static title #6.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 6885,
                        quantity: 4
                    },
                ]
            },
            {
                status: {
                    id: 2,
                    name: 'Cancel'
                },
                cliente: "lorem ipsum",
                shippingAddress: 'Cll 65 sur # 56 -90',
                shippingPromise: '2023-07-24',
                createDate: '2023-07-28',
                items: [
                    {
                        id: 7,
                        title: 'This is static title #7.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 68884,
                        quantity: 3
                    },
                ]
            },
            {
                status: {
                    id: 1,
                    name: 'Approve'
                },
                cliente: "lorem ipsum",
                shippingAddress: 'Cll 65 sur # 56 -90',
                shippingPromise: '2023-07-24',
                createDate: '2023-07-28',
                items: [
                    {
                        id: 8,
                        title: 'This is static title #8.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 458885,
                        quantity: 5
                    },
                    {
                        id: 9,
                        title: 'This is static title #9.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 4411,
                        quantity: 2
                    },
                    {
                        id: 10,
                        title: 'This is static title #10.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 2222,
                        quantity: 10
                    },
                    {
                        id: 11,
                        title: 'This is static title #11.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 45655,
                        quantity: 2
                    },
                    {
                        id: 12,
                        title: 'This is static title #12.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 5765,
                        quantity: 10
                    },
                    {
                        id: 13,
                        title: 'This is static title #13.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 456456,
                        quantity: 3
                    },
                    {
                        id: 14,
                        title: 'This is static title #14.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 8545,
                        quantity: 1
                    },
                    {
                        id: 15,
                        title: 'This is static title #15.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 4556,
                        quantity: 3
                    },
                ]
            },
            {
                status: {
                    id: 4,
                    name: 'Traveling'
                },
                cliente: "lorem ipsum",
                shippingAddress: 'Cll 65 sur # 56 -90',
                shippingPromise: '2023-07-28',
                createDate: '2023-07-28',
                items: [
                    {
                        id: 16,
                        title: 'This is static title #16.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 6885,
                        quantity: 4
                    },
                    {
                        id: 17,
                        title: 'This is static title #17.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 68884,
                        quantity: 3
                    },
                    {
                        id: 18,
                        title: 'This is static title #18.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 458885,
                        quantity: 5
                    },
                    {
                        id: 19,
                        title: 'This is static title #19.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 4411,
                        quantity: 2
                    },
                    {
                        id: 20,
                        title: 'This is static title #20.',
                        description: 'this is static description',
                        url: 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png',
                        price: 2222,
                        quantity: 10
                    }
                ]
            },
        ]);
    }
}
