import StatusDTO from './../../../domain/status/dto/status.dto';
import { StatusEntity } from '../adapter/entity/status.entity';

export default class StatusMapper {

    public static toDomain(statusEntity: StatusEntity): StatusDTO {
        
        const status = new StatusDTO();

        status.id = statusEntity.id;
        status.name = statusEntity.name;
        
        return status;

    }
   
    public static toDomains(statusEntity: StatusEntity[]): StatusDTO[] {
        const status = new Array<StatusDTO>();
        statusEntity.forEach((obj) => {
            const Status = this.toDomain(obj);
            status.push(Status);
        });
        return status;
    }

}