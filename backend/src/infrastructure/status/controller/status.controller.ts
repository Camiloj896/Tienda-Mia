/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Post, Get, Put, Delete, Param, Res, Body, HttpStatus } from '@nestjs/common';
import StatusDTO from '../../../domain/status/dto/status.dto';
import GetAllStatusUseCase from '../../../aplication/status/getAllStatus.usecase';
import GetStatusUseCase from '../../../aplication/status/getStatus.usecase';
import CreateStatusUseCase from '../../../aplication/status/createStatus.usecase';
import UpdateStatusUseCase from '../../../aplication/status/updateStatus.usecase';
import DeleteStatusUseCase from '../../../aplication/status/deleteStatus.usecase';


@Controller('api/status')
export class StatusController {
  
    constructor( 
        private getAllStatusUseCase: GetAllStatusUseCase,
        private getStatusUseCase: GetStatusUseCase,
        private createStatusUseCase: CreateStatusUseCase,
        private updateStatusUseCase: UpdateStatusUseCase,
        private deleteStatusUseCase: DeleteStatusUseCase,
    ) {}

    /**
   * @returns all `Statuss` object containing the data.
   */
    @Get()
    async getAll(@Res() request): Promise<StatusDTO[]> {    
        const status = await this.getAllStatusUseCase.handler();
        return request.status(HttpStatus.OK).json(status);
    }

    /**
     * @param {number} id
     * @returns a `Status` object containing the data filtered by id.
     */
    @Get(':id')
    async get(@Res() request, @Param('id') id: number): Promise<StatusDTO> {
        const Status = await this.getStatusUseCase.handler(id);
        return request.status(HttpStatus.OK).json(Status);
    }

    /**
     * @param {object} StatusDTO
     * @returns a `Status` object containing the data.
     */
    @Post()
    async create(@Res() request, @Body() statusDto: StatusDTO): Promise<StatusDTO> {
        const status = await this.createStatusUseCase.handler(statusDto);
        return request.status(HttpStatus.CREATED).json(status);
    }

    /**
     * @param {number} id
     * @param {object} StatusDTO
     * @returns a `Status` object containing the data and status code.
     */
    @Put(':id')
    async update(@Res() request, @Body() statusDto: StatusDTO, @Param('id') id: number): Promise<any> {
        const status = await this.updateStatusUseCase.handler(id, statusDto);
        return request.status(HttpStatus.OK).json(status);
    }

    /**
   * @param {number} id
   * @returns a `staus` code.
   */
    @Delete(':id')
    async delete(@Res() request, @Param('id') id: number): Promise<any> {
        const status = await this.deleteStatusUseCase.handler(id);
        return request.status(HttpStatus.OK).json(status);
    }

}
