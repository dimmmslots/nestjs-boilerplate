import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { PORT } from '@common/constants';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.use(cookieParser());
  app.use(csurf({ cookie: true }));
  app.setGlobalPrefix('/api');
  const port = PORT || 3000;
  await app.listen(port);
}
bootstrap();
