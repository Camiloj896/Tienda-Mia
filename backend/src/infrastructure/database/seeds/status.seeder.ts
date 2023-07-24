import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { StatusEntity } from '../../status/adapter/entity/status.entity';

export default class StatusSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
    ): Promise<any> {
        const repository =  dataSource.getRepository(StatusEntity);
        await repository.insert([
            {
                name: 'Approve'
            },
            {
                name: 'Cancel'
            },
            {
                name: 'Delivery'
            },
            {
                name: 'Traveling'
            }
        ]);
    }
}