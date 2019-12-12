import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('Desafio Bossabox')
    .setDescription('Aplicação para o desafio de backend da Bossabox.')
    .setVersion('1.0')
    .addTag('bossabox')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const port = parseInt(process.env.PORT, 10) || 3000;
  await app.listen(port);
}
bootstrap();
