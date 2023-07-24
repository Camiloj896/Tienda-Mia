import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { OrderEntity } from '../../../order/adapter/entity/order.entity';

@Entity({ name: 'status' })
export class StatusEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false})
  name: string;

  @OneToMany(() => OrderEntity, (order) => order.status)
  orders: OrderEntity[];

}