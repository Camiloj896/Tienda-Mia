import { Injectable } from '@nestjs/common';
import OrderDTO from './../dto/order.dto';

import { OrderRepository } from '../port/order.repository';
import { FieldRequiredJson } from './fieldrequired';

import { FieldRequire } from '../../exceptions/field-required';

@Injectable()
export default class OrderService { 

    constructor(private orderRepository: OrderRepository) {}

    /**
   * @returns all `Orders` object containing the data.
   */
    async getAll(): Promise<OrderDTO[]> {  
      const Orders = await this.orderRepository.getAll();     
      return Orders;
    }
    
    /**
   * @param {number} id
   * @returns a `Order` object containing the data filtered by id.
   */
    async get(id: number): Promise<OrderDTO> {
      const Order = await this.orderRepository.get(id);
      return Order;
    }

    /**
   * @param {object} OrderDTO
   * @returns a `Order` object containing the data.
   */
    async create(orderDTO: OrderDTO): Promise<OrderDTO> {

      for (const key in FieldRequiredJson) {
        if (!orderDTO.hasOwnProperty(key)) {
          throw new FieldRequire(
            `the field \'${key}\' is required`,
          );
        }
      }

      const Order = await this.orderRepository.create(orderDTO);
      return Order;

    }

    /**
   * @param {number} id
   * @param {object} OrderDTO
   * @returns a `Order` object containing the data and Order code.
   */
    async update(id: number, orderDTO: OrderDTO): Promise<any> {     

      for (const key in FieldRequiredJson) {
        if (!orderDTO.hasOwnProperty(key)) {
          throw new FieldRequire(
            `the field \'${key}\' is required`,
          );
        }
      }

        const Order = await this.orderRepository.update(id, orderDTO);
        return Order;

    }

    /**
   * @param {number} id
   * @returns a `status` code.
   */
    async delete(id: number): Promise<any> {
      const Order = await this.orderRepository.delete(id);
      return Order;
    }

}