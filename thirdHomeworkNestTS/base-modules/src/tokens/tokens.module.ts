import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { Token } from './tokens.model';
import { TokensService } from './tokens.service';

@Module({
  providers: [TokensService],
  exports: [TokensService],
  imports: [SequelizeModule.forFeature([ Token ]),
  forwardRef( () => AuthModule),
  UsersModule]
})
export class TokensModule {}
