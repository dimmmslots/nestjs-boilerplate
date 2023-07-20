import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { nestCsrf } from 'ncsrf';

@Injectable()
export class CsrfMiddleware implements NestMiddleware {
  private csrfProtection = nestCsrf({
    ttl: 60 * 60 * 24,
  });

  use(req: Request, res: Response, next: NextFunction) {
    this.csrfProtection(req, res, next);
  }
}
