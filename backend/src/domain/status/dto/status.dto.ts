import { ApiProperty } from '@nestjs/swagger';
import OrderDTO from './../../order/dto/order.dto';

export default class StatusDTO {

    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    orders: OrderDTO[];
}
    