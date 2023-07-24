import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { OrderEntity } from '../../../order/adapter/entity/order.entity';

@Entity({ name: 'item' })
export class ItemEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false})
  title: string;

  @Column({ type: 'varchar', nullable: false})
  description: string;

  @Column({ type: 'varchar', nullable: false})
  url: string;

  @Column({ type: 'int', nullable: false})
  price: number;

  @Column({ type: 'int', nullable: false})
  quantity: number;

  @ManyToOne(() => OrderEntity, (order) => order.items)
  order: OrderEntity

}