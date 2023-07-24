import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { DataSourceOptions } from 'typeorm/data-source';
import InitSeeder from './infrastructure/database/seeds/init.seeder';
import { StatusEntity } from './infrastructure/status/adapter/entity/status.entity';
import { ItemEntity } from './infrastructure/item/adapter/entity/item.entity';
import { OrderEntity } from './infrastructure/order/adapter/entity/order.entity';

ConfigModule.forRoot({
  envFilePath: '.env',
});

export const options = {
  type: 'mysql',
  host: process.env.HOST,
  port: parseInt(process.env.PORT),
  username: process.env.USERNAME_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE,
  entities: [StatusEntity, ItemEntity, OrderEntity],
  seeds: [InitSeeder],
};

export const source = new DataSource(
  options as DataSourceOptions & SeederOptions,
);