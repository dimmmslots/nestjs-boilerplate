import { AuthService } from '@/auth/auth.service';
import { AuthDto } from '@/auth/dtos/auth.dto';
import { User, UserSafe } from '@/user/entities/user';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<UserSafe> {
    const user = await this.authService.login({ email, password });

    if (!user)
      throw new UnauthorizedException('Email or password is incorrect');

    const { id, ...rest } = user;

    return { id };
  }
}
