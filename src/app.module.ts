import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperacionesService } from './operaciones/operaciones.service';
import { OperacionesController } from './operaciones/operaciones.controller';
import { DbManagerService } from './db-manager/db-manager.service';

@Module({
  imports: [],
  controllers: [AppController, OperacionesController],
  providers: [AppService, OperacionesService, DbManagerService],
})
export class AppModule {}
