import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ preflightContinue: false, origin: true });
  await app.listen(8080);
}
bootstrap();
