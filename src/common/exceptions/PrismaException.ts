import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaException implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    // check if exception is a PrismaClientKnownRequestError
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    if (exception.code === 'P2002') {
      return response.status(409).json({
        message: `${exception.meta.target[0]} already exists`,
      });
    }

    return response.status(500).json({
      message: 'Internal server errors',
      obj: exception,
    });
  }
}
