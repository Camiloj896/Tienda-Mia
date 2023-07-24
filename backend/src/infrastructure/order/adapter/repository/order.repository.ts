import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from '../entity/order.entity';
import { OrderRepository } from './../../../../domain/order/port/order.repository';
import OrderDTO from './../../../../domain/order/dto/order.dto';
import OrderMapper from '../../mapper/order.mapper';

import { CatchError } from '../../../../domain/exceptions/catch-error';
import { DataMissing } from '../../../../domain/exceptions/data-missing';

@Injectable()
export default class OrderRepositoryImpl implements OrderRepository {

    constructor(@InjectRepository(OrderEntity) private orderRepository: Repository<OrderEntity>){}

    /**
   * @returns all `Orders` object containing the data.
   */
    async getAll(): Promise<OrderEntity[]> {
        
        try {

            const orders = await this.orderRepository.find({
                relations: {
                    status: true,
                    items: true,
                },
            });    
            return OrderMapper.toDomains(orders);
            
        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }


    }
    
    /**
   * @param {number} id
   * @returns a `Order` object containing the data filtered by id.
   */
    async get(id: number): Promise<OrderEntity> {
        
        try {

            const order = await this.orderRepository.findOneBy({id});;
            
            if (order === undefined) {
                throw new DataMissing(
                  `The order with id: ${id} does not exist`,
                );
            }

            return OrderMapper.toDomain(order);
            
        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }

    }

    /**
   * @param {object} OrderDTO
   * @returns a `Order` object containing the data.
   */
    async create(orderDto: OrderDTO): Promise<OrderEntity> {    
        
        try {

            const order = await this.orderRepository.save(orderDto);
            return OrderMapper.toDomain(order);
            
        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }

    }

    /**
   * @param {number} id
   * @param {object} OrderDTO
   * @returns a `Order` object containing the data and status code.
   */
    async update(id: number, orderDto: OrderDTO): Promise<any> {
        
        try {

            await this.orderRepository.update(id, orderDto);

            const order = await this.orderRepository.findOneBy({id});;
    
            const res = {
                statusCode: 201,            
                message: 'The orden has been updated',
                data: order
            };
    
            return res;
            
        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }


    }

    /**
   * @param {number} id
   * @returns a `staus` code.
   */
    async delete(id: number): Promise<any> {

        try {
            
            await this.orderRepository.delete(id);
    
            const res = {
                statusCode: 200,            
                message: 'The order has been deleted'
            };
    
            return res;

        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }

    }

}

