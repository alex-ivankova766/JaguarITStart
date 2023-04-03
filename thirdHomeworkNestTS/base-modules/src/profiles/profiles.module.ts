import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { RolesModule } from 'src/roles/roles.module';
import { TokensModule } from 'src/tokens/tokens.module';

import { User } from 'src/users/users.model';
import { UsersModule } from 'src/users/users.module';
import { ProfilesController } from './profiles.controller';
import { Profile } from './profiles.model';
import { ProfilesService } from './profiles.service';

@Module({
  controllers: [ProfilesController],
  providers: [ProfilesService],
  imports: [
    SequelizeModule.forFeature([User, Profile]),
    forwardRef(() =>AuthModule),
    forwardRef(() => UsersModule),
    forwardRef(() => RolesModule),
    TokensModule
  ],
  exports: [ProfilesService]
})
export class ProfilesModule {}
