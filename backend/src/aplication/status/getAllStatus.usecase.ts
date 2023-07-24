import { Injectable } from '@nestjs/common';
import StatusDTO from './../../domain/status/dto/status.dto';
import StatusService from './../../domain/status/service/status.service';

@Injectable()
export default class GetAllStatusUseCase {

  constructor(private statusService: StatusService) {}

  /**
   * @returns all `status` object containing the data.
   */
  public async handler(): Promise<StatusDTO[]> {
    return await this.statusService.getAll();
  }

}