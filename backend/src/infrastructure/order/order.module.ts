import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import OrderService from './../../domain/order/service/order.service';
import { OrderRepository } from './../../domain/order/port/order.repository';

import GetAllOrdersUseCase from './../../aplication/order/getAllOrders.usecase';
import GetOrderUseCase from './../../aplication/order/getOrder.usecase';
import CreateOrderUseCase from './../../aplication/order/createOrder.usecase';
import UpdateOrderUseCase from './../../aplication/order/updateOrder.usecase';
import DeleteOrderUseCase from './../../aplication/order/deleteOrder.usecase';

import { OrderController } from './controller/order.controller';
import { OrderEntity } from './adapter/entity/order.entity';
import OrderRepositoryImpl from './adapter/repository/order.repository';

const repositoryOrderProvider = {
  provide: OrderRepository,
  useClass: OrderRepositoryImpl,
};

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  providers: [
    GetAllOrdersUseCase,
    GetOrderUseCase,
    CreateOrderUseCase,
    UpdateOrderUseCase,
    DeleteOrderUseCase,
    OrderService,
    repositoryOrderProvider
  ],
  controllers: [OrderController],
  exports: []
})

export class OrderModule {}
