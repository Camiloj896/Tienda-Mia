import { Module, Logger } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { StatusModule } from './status/status.module';
import { ItemModule } from './item/item.module';
import { OrderModule } from './order/order.module';


@Module({
  providers: [ Logger ],
  imports: [    
    DatabaseModule,
    StatusModule,
    ItemModule,
    OrderModule
  ],
})
export class InfrastructureModule { }
