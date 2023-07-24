import { ApiProperty } from '@nestjs/swagger';
import StatusDTO from './../../status/dto/status.dto';
import ItemDTO from './../../item/dto/item.dto';

export default class OrderDTO {

    @ApiProperty()
    id: number;

    @ApiProperty()
    createDate: Date;

    @ApiProperty()
    status: StatusDTO;
    
    @ApiProperty()
    cliente: string;

    @ApiProperty()
    shippingAddress: string;

    @ApiProperty()
    shippingPromise: Date;

    @ApiProperty()
    items: ItemDTO[];
}
    