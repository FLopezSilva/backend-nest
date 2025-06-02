import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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

}
