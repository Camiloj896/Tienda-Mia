/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Post, Get, Put, Delete, Param, Res, Body, HttpStatus } from '@nestjs/common';
import OrderDTO from '../../../domain/order/dto/order.dto';
import GetAllOrdersUseCase from './../../../aplication/order/getAllOrders.usecase';
import GetOrderUseCase from '../../../aplication/order/getOrder.usecase';
import CreateOrderUseCase from './../../../aplication/order/createOrder.usecase';
import UpdateOrderUseCase from './../../../aplication/order/updateOrder.usecase';
import DeleteOrderUseCase from './../../../aplication/order/deleteOrder.usecase';


@Controller('api/orders')
export class OrderController {
  
    constructor( 
        private getAllOrdersUseCase: GetAllOrdersUseCase,
        private getOrderUseCase: GetOrderUseCase,
        private createOrderUseCase: CreateOrderUseCase,
        private updateOrderUseCase: UpdateOrderUseCase,
        private deleteOrderUseCase: DeleteOrderUseCase,
    ) {}

    /**
   * @returns all `Orders` object containing the data.
   */
    @Get()
    async getAll(@Res() request): Promise<OrderDTO[]> {    
        const orders = await this.getAllOrdersUseCase.handler();
        return request.status(HttpStatus.OK).json(orders);
    }

    /**
     * @param {number} id
     * @returns a `Order` object containing the data filtered by id.
     */
    @Get(':id')
    async get(@Res() request, @Param('id') id: number): Promise<OrderDTO> {
        const order = await this.getOrderUseCase.handler(id);
        return request.status(HttpStatus.OK).json(order);
    }

    /**
     * @param {object} OrderDTO
     * @returns a `Order` object containing the data.
     */
    @Post()
    async create(@Res() request, @Body() orderDto: OrderDTO): Promise<OrderDTO> {
        const order = await this.createOrderUseCase.handler(orderDto);
        return request.status(HttpStatus.CREATED).json(order);
    }

    /**
     * @param {number} id
     * @param {object} OrderDTO
     * @returns a `Order` object containing the data and status code.
     */
    @Put(':id')
    async update(@Res() request, @Body() orderDto: OrderDTO, @Param('id') id: number): Promise<any> {
        const order = await this.updateOrderUseCase.handler(id, orderDto);
        return request.status(HttpStatus.OK).json(order);
    }

    /**
   * @param {number} id
   * @returns a `staus` code.
   */
    @Delete(':id')
    async delete(@Res() request, @Param('id') id: number): Promise<any> {
        const order = await this.deleteOrderUseCase.handler(id);
        return request.status(HttpStatus.OK).json(order);
    }

}
