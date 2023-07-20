import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { AuthenticatedGuard } from '@/common/guards/authenticated.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthenticatedGuard)
  @Get('me')
  async me(@Req() req: Request) {
    return {
      message: 'You are successfully logged in',
      data: req.user,
    };
  }
}
