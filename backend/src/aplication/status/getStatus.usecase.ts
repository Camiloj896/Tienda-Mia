import { Injectable } from '@nestjs/common';
import StatusDTO from './../../domain/status/dto/status.dto';
import StatusService from './../../domain/status/service/status.service';

@Injectable()
export default class GetStatusUseCase {

  constructor(private statusService: StatusService) {}

  /**
   * @param {number} id
   * @returns a `status` object containing the data filtered by id.
   */
  public async handler(id: number): Promise<StatusDTO> {
    return await this.statusService.get(id);
  }

}