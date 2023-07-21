import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { PORT } from '@common/constants';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { CsrfFilter } from 'ncsrf';
import * as session from 'express-session';
import * as passport from 'passport';
import { sessionConfig } from './common/configs/session.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.use(helmet());
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(passport.session());
  app.useGlobalFilters(new CsrfFilter());
  const port = PORT || 3000;
  await app.listen(port);
}
bootstrap();
