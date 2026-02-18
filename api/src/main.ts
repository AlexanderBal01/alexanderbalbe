import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:5173', // Local Vite Dev Server
      'http://127.0.0.1:5173', // Alternate Local Address
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const PORT = process.env.PORT || 3000;

  await app.listen(PORT, '0.0.0.0');
}
bootstrap();
