import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';}

getHelloChino(): string {
    return 'ni hao ma';
  }
  getHelloPeruano(): string {
    return 'saludos desde lima peru';
  }


}




