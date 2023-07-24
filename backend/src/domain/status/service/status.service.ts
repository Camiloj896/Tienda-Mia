import { Injectable } from '@nestjs/common';
import StatusDTO from './../dto/status.dto';

import { StatusRepository } from '../port/status.repository';
import { FieldRequiredJson } from './fieldrequired';

import { FieldRequire } from './../../exceptions/field-required';

@Injectable()
export default class StatusService { 

    constructor(private statusRepository: StatusRepository) {}

    /**
   * @returns all `status` object containing the data.
   */
    async getAll(): Promise<StatusDTO[]> {  
      const status = await this.statusRepository.getAll();     
      return status;
    }
    
    /**
   * @param {number} id
   * @returns a `status` object containing the data filtered by id.
   */
    async get(id: number): Promise<StatusDTO> {
      const status = await this.statusRepository.get(id);
      return status;
    }

    /**
   * @param {object} StatusDTO
   * @returns a `status` object containing the data.
   */
    async create(statusDTO: StatusDTO): Promise<StatusDTO> {

      for (const key in FieldRequiredJson) {
        if (!statusDTO.hasOwnProperty(key)) {
          throw new FieldRequire(
            `the field \'${key}\' is required`,
          );
        }
      }

      const status = await this.statusRepository.create(statusDTO);
      return status;

    }

    /**
   * @param {number} id
   * @param {object} StatusDTO
   * @returns a `status` object containing the data and status code.
   */
    async update(id: number, statusDTO: StatusDTO): Promise<any> {     

      for (const key in FieldRequiredJson) {
        if (!statusDTO.hasOwnProperty(key)) {
          throw new FieldRequire(
            `the field \'${key}\' is required`,
          );
        }
      }

        const status = await this.statusRepository.update(id, statusDTO);
        return status;

    }

    /**
   * @param {number} id
   * @returns a `status` code.
   */
    async delete(id: number): Promise<any> {
      const status = await this.statusRepository.delete(id);
      return status;
    }

}