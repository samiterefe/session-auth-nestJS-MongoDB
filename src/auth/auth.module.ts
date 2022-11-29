import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}
