import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatusEntity } from '../entity/status.entity';
import { StatusRepository } from './../../../../domain/status/port/status.repository';
import StatusDTO from './../../../../domain/status/dto/status.dto';
import StatusMapper from '../../mapper/status.mapper';

import { CatchError } from '../../../../domain/exceptions/catch-error';
import { DataMissing } from '../../../../domain/exceptions/data-missing';

@Injectable()
export default class StatusRepositoryImpl implements StatusRepository {

    constructor(@InjectRepository(StatusEntity) private statusRepository: Repository<StatusEntity>){}

    /**
   * @returns all `status` object containing the data.
   */
    async getAll(): Promise<StatusEntity[]> {
        
        try {

            const status = await this.statusRepository.find();    
            return StatusMapper.toDomains(status);
            
        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }


    }
    
    /**
   * @param {number} id
   * @returns a `Status` object containing the data filtered by id.
   */
    async get(id: number): Promise<StatusEntity> {
        
        try {

            const status = await this.statusRepository.findOneBy({id});;
            
            if (status === undefined) {
                throw new DataMissing(
                  `the user ${id} does not exist`,
                );
            }

            return StatusMapper.toDomain(status);
            
        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }

    }

    /**
   * @param {object} StatusDTO
   * @returns a `Status` object containing the data.
   */
    async create(statusDto: StatusDTO): Promise<StatusEntity> {    
        
        try {

            const status = await this.statusRepository.save(statusDto);
            return StatusMapper.toDomain(status);
            
        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }

    }

    /**
   * @param {number} id
   * @param {object} StatusDTO
   * @returns a `Status` object containing the data and status code.
   */
    async update(id: number, statusDto: StatusDTO): Promise<any> {
        
        try {

            await this.statusRepository.update(id, statusDto);

            const status = await this.statusRepository.findOneBy({id});;
    
            const res = {
                statusCode: 201,            
                message: 'the status has been updated',
                data: status
            };
    
            return res;
            
        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }


    }

    /**
   * @param {number} id
   * @returns a `status` code.
   */
    async delete(id: number): Promise<any> {

        try {
            
            await this.statusRepository.delete(id);
    
            const res = {
                statusCode: 200,            
                message: 'the data has been deleted'
            };
    
            return res;

        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }

    }

}

