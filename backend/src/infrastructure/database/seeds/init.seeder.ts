import { DataSource } from 'typeorm';
import { runSeeders, Seeder, SeederFactoryManager } from 'typeorm-extension';

import ItemSeeder from './item.seeder';
import StatusSeeder from './status.seeder';
import OrderSeeder from './order.seeder';

export default class InitSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    await runSeeders(dataSource, {
      seeds: [StatusSeeder, ItemSeeder, OrderSeeder],
    });
  }
}