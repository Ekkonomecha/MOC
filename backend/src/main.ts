import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS so the React Native frontend can access the API
  app.enableCors();
  await app.listen(process.env.PORT ?? 3010);
}
bootstrap();
