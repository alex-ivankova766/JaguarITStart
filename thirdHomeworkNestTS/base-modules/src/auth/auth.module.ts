import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {JwtModule} from '@nestjs/jwt';
import { ProfilesModule } from 'src/profiles/profiles.module';
import { TokensModule } from 'src/tokens/tokens.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    forwardRef(() => ProfilesModule),
    JwtModule.register({}),
    forwardRef(() => TokensModule)
  ],
  exports: [
    AuthService,
    JwtModule
  ]
})
export class AuthModule {}
