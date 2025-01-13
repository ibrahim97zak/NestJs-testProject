/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/sayHello')
  getHelloToUser(@Query('name') name): string {
    return this.appService.getHelloToUser(name);
  }
  @Post('/sayHiToParam/:name')//+
  sayHelloToParam(@Param('name') name : string) : string {
    return this.appService.sayHelloToParam(name);
  }
}
