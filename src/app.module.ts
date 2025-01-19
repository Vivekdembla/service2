import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RabbitMQModule } from './rabbitmq.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/service2'), RabbitMQModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
