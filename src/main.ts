import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

const server = express();

async function createApp() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  
  // Enable validation globally
  app.useGlobalPipes(new ValidationPipe());
  
  // Enable CORS if needed
  app.enableCors();
  
  await app.init();
  return app;
}

// For Vercel
let cachedApp: any;

export default async (req: any, res: any) => {
  if (!cachedApp) {
    cachedApp = await createApp();
  }
  return server(req, res);
};

// For local development
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable validation globally
  app.useGlobalPipes(new ValidationPipe());
  
  // Enable CORS if needed
  app.enableCors();
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`API is running on http://localhost:${port}`);
}

// Only run bootstrap in development
if (process.env.NODE_ENV !== 'production') {
  bootstrap();
}