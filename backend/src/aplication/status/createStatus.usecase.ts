import { Injectable } from '@nestjs/common';
import StatusDTO from './../../domain/status/dto/status.dto';
import StatusService from './../../domain/status/service/status.service';

@Injectable()
export default class CreateStatusUseCase {

  constructor(private statusService: StatusService) {}

  /**
   * @param {object} StatusDTO
   * @returns a `status` object containing the data.
   */
  public async handler(status: StatusDTO): Promise<StatusDTO> {
    return await this.statusService.create(status);
  }

}