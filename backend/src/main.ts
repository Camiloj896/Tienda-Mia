import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { FilterExeptionBussines } from './infrastructure/exceptions/exceptions-business';
import { StatusModule } from './infrastructure/status/status.module';
import { ItemModule } from './infrastructure/item/item.module';
import { OrderModule } from './infrastructure/order/order.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const logger = app.get(Logger);

  app.useGlobalFilters(new FilterExeptionBussines(logger));

  const swaggerOptions = new DocumentBuilder()
    .setTitle('User Management API')
    .setDescription('API Rest Documentation')
    .setVersion('1.0')
    .build();

  const StatusDocument = SwaggerModule.createDocument(app, swaggerOptions, {
      include: [StatusModule]
  });

  SwaggerModule.setup('api/swagger/status', app, StatusDocument);

  const ItemDocument = SwaggerModule.createDocument(app, swaggerOptions, {
    include: [ItemModule]
  });

  SwaggerModule.setup('api/swagger/item', app, ItemDocument);

  const OrderDocument = SwaggerModule.createDocument(app, swaggerOptions, {
    include: [OrderModule]
  });

  SwaggerModule.setup('api/swagger/order', app, OrderDocument);


  //ENABLE CORS
  app.enableCors();
  await app.listen(3000);

}

bootstrap();
