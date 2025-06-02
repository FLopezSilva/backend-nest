import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hola buenas';}

getHelloChino(): string {
    return 'ni hao ma';
  }
  getHelloPeruano(): string {
    return 'saludos desde lima peru';
  }

}




