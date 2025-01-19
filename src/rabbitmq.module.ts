import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { RABBITMQ_URL } from "./config/constants";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'SERVICE_1',
                transport: Transport.RMQ,
                options: {
                    urls: [RABBITMQ_URL],
                    queue: 'service1_queue',
                    queueOptions: {durable: false}
                }
            },
            {
                name: 'SERVICE_2',
                transport: Transport.RMQ,
                options: {
                    urls: [RABBITMQ_URL],
                    queue: 'service2_queue',
                    queueOptions: {durable: false}
                }
            },
        ])
    ],
    exports: [ClientsModule]
})
export class RabbitMQModule {}
