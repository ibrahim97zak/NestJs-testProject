/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }
  getHelloToUser(name : string) : string {
    return `Hello User to ${name}`;
  }
  sayHelloToParam( name : string) : string {

    return `Hello pararm to ${name}!`

  }
}
