import StatusDTO from '../dto/status.dto';

export abstract class StatusRepository {

    /**
   * @returns all `status` object containing the data.
   */
   abstract getAll(): Promise<StatusDTO[]>;

    /**
   * @param {number} id
   * @returns a `status` object containing the data filtered by id.
   */
  abstract get(id: number): Promise<StatusDTO>;

    /**
   * @param {object} StatusDTO
   * @returns a `status` object containing the data.
   */
  abstract create(status: StatusDTO): Promise<StatusDTO>;

    /**
   * @param {number} id
   * @param {object} StatusDTO
   * @returns a `status` object containing the data and status code.
   */
  abstract update(id: number, status: StatusDTO): Promise<any>;

    /**
   * @param {number} id
   * @returns a `staus` code.
   */
  abstract delete(id: number): Promise<any>;
  
}