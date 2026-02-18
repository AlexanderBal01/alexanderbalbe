import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000', // Local Vite Dev Server
      'http://127.0.0.1:3000', // Alternate Local Address
      'http://192.168.1.25:3000',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const PORT = process.env.PORT || 3000;

  await app.listen(PORT, '0.0.0.0');
}
bootstrap();
