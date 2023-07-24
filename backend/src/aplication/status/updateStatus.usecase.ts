import { Injectable } from '@nestjs/common';
import StatusDTO from './../../domain/status/dto/status.dto';
import StatusService from './../../domain/status/service/status.service';

@Injectable()
export default class UpdateStatusUseCase {

  constructor(private statusService: StatusService) {}

  /**
   * @param {number} id
   * @param {object} StatusDTO
   * @returns a `status` object containing the data and status code.
   */
  public async handler(id: number, status: StatusDTO): Promise<any> {
    await this.statusService.get(id);
    return await this.statusService.update(id, status);
  }

}