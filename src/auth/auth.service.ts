import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.module';
import { AuthDto } from './dtos/auth.dto';
import * as bcrypt from 'bcrypt';
import { User } from '@/user/entities/user';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async login(payload: AuthDto): Promise<User | null> {
    const user = await this.prismaService.user.findFirst({
      where: { email: payload.email },
    });

    if (!user) return null;

    const passwordMatches = await bcrypt.compare(
      payload.password,
      user.password,
    );

    if (!passwordMatches) return null;

    return user;
  }

  async register(payload: AuthDto) {
    const encrypted = await bcrypt.hash(payload.password, 10);
    return await this.prismaService.user.create({
      data: { email: payload.email, password: encrypted },
    });
  }
}
