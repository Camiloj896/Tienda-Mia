import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { StatusEntity } from '../../../status/adapter/entity/status.entity';
import { ItemEntity } from '../../../item/adapter/entity/item.entity';


@Entity({ name: 'order' })
export class OrderEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createDate: Date;

  @ManyToOne(() => StatusEntity, (status) => status.orders)
  status: StatusEntity

  @Column({ type: 'varchar', nullable: false})
  cliente: string;

  @Column({ type: 'varchar', nullable: false})
  shippingAddress: string;

  @Column({ type: 'date', nullable: false})
  shippingPromise: Date;

  @OneToMany(() => ItemEntity, (item) => item.order)
  items: ItemEntity[];

}