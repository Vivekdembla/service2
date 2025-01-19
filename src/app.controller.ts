import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectModel } from '@nestjs/mongoose';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';

const CREATE_USER = 'createUser';
const RECEIVE_ACK = 'recieve-ack';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('SERVICE_1') private readonly service1Client: ClientProxy
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @MessagePattern(CREATE_USER)
  async handleGetCustomer(@Payload() data: any) {
    console.log(data)
    this.service1Client.emit(RECEIVE_ACK, {data,status: 'Ack'});
  }
}
