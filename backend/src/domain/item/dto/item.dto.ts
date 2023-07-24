import { ApiProperty } from '@nestjs/swagger';
import OrderDTO from './../../order/dto/order.dto';

export default class ItemDTO {

    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;
    
    @ApiProperty()
    url: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    quantity: number;

    @ApiProperty()
    order: OrderDTO;
}
    