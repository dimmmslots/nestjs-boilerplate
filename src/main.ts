import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { PORT, SESSION_SECRET } from '@common/constants';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { CsrfFilter } from 'ncsrf';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.use(helmet());
  app.use(cookieParser());
  app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      cookie: {
        // max age of 1 day
        maxAge: 1000 * 60 * 60 * 24,
      },
      saveUninitialized: false,
    }),
  );
  app.use(passport.session());
  app.useGlobalFilters(new CsrfFilter());
  const port = PORT || 3000;
  await app.listen(port);
}
bootstrap();
