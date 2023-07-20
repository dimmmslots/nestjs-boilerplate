import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth.dto';
import { Csrf } from 'ncsrf';
import { LocalAuthGuard } from '@/common/guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Csrf()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login() {
    return {
      message: 'You are successfully logged in',
    };
  }

  @Csrf()
  @Post('register')
  async register(@Body() payload: AuthDto) {
    return this.authService.register(payload);
  }
}
