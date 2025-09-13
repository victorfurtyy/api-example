import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// For Vercel serverless function
let app: any;

async function createNestApp() {
  if (!app) {
    app = await NestFactory.create(AppModule);
    
    // Enable validation globally
    app.useGlobalPipes(new ValidationPipe());
    
    // Enable CORS if needed
    app.enableCors();
    
    await app.init();
  }
  return app;
}

// Export for Vercel
export default async (req: any, res: any) => {
  const nestApp = await createNestApp();
  const httpServer = nestApp.getHttpServer();
  return httpServer(req, res);
};

// For local development
async function bootstrap() {
  const nestApp = await NestFactory.create(AppModule);
  
  // Enable validation globally
  nestApp.useGlobalPipes(new ValidationPipe());
  
  // Enable CORS if needed
  nestApp.enableCors();
  
  const port = process.env.PORT || 3000;
  await nestApp.listen(port);
  console.log(`API is running on http://localhost:${port}`);
}

// Only run bootstrap in development
if (process.env.NODE_ENV !== 'production') {
  bootstrap();
}