import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import StatusService from './../../domain/status/service/status.service';
import { StatusRepository } from './../../domain/status/port/status.repository';

import GetAllStatusUseCase from './../../aplication/status/getAllStatus.usecase';
import GetStatusUseCase from './../../aplication/status/getStatus.usecase';
import CreateStatusUseCase from './../../aplication/status/createStatus.usecase';
import UpdateStatusUseCase from './../../aplication/status/updateStatus.usecase';
import DeleteStatusUseCase from './../../aplication/status/deleteStatus.usecase';

import { StatusController } from './controller/status.controller';
import { StatusEntity } from './adapter/entity/status.entity';
import StatusRepositoryImpl from './adapter/repository/status.repository';

const repositoryStatusProvider = {
  provide: StatusRepository,
  useClass: StatusRepositoryImpl,
};

@Module({
  imports: [TypeOrmModule.forFeature([StatusEntity])],
  providers: [
    GetAllStatusUseCase,
    GetStatusUseCase,
    CreateStatusUseCase,
    UpdateStatusUseCase,
    DeleteStatusUseCase,
    StatusService,
    repositoryStatusProvider
  ],
  controllers: [StatusController],
  exports: []
})

export class StatusModule {}
