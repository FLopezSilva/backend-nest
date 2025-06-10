import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DbManagerService } from './db-manager/db-manager.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbManager: DbManagerService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('nihao')
  getHelloChino(): string {
    return this.appService.getHelloChino();
  }  @Get('holape')
  getHelloPeruano(): string {
    return this.appService.getHelloPeruano();
  }

    @Get('user')
    getUser(id: number){
      return this.dbManager.getUser(id);
    }
  

}
