import { Injectable } from '@nestjs/common';
import StatusService from './../../domain/status/service/status.service';

@Injectable()
export default class DeleteStatusUseCase {

    constructor(private statusSercive: StatusService) {}

    /**
     * @param {number} id
     * @returns a `status` code.
     */
    public async handler(id: number): Promise<any> {
        await this.statusSercive.get(id);
        return await this.statusSercive.delete(id);
    }

}