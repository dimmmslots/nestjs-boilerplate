import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaException } from './common/exceptions/PrismaException';
import { ZodException } from './common/exceptions/ZodException';
import { CsrfMiddleware } from './common/middlewares/csrf.middleware';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_PIPE, useClass: ZodValidationPipe },
    { provide: APP_FILTER, useClass: ZodException },
    { provide: APP_FILTER, useClass: PrismaException },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CsrfMiddleware).forRoutes('*');
  }
}
