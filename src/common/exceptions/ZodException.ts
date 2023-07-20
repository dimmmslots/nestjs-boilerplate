import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { ZodError } from 'zod';

@Catch(ZodException)
export class ZodException implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request: Request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const error = (exception.getResponse() as ZodError).errors[0].message;
    return response.status(status).json({
      message: error,
    });
  }
}
