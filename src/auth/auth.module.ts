import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '@prisma/prisma.module';
import { LocalStrategy } from '@/common/strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from '@/common/session.serializer';

@Module({
  imports: [PassportModule.register({ session: true })],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}
