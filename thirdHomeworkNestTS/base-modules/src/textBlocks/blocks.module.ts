import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseFilesModule } from 'src/databaseFiles/files.module';
import { BlocksController } from './blocks.controller';
import { TextBlock } from './blocks.model';
import { BlocksService } from './blocks.service';

@Module({
  controllers: [BlocksController],
  providers: [BlocksService],
  imports: [
    SequelizeModule.forFeature( [ TextBlock ]),
    DatabaseFilesModule,
    AuthModule
  ],
  exports: [BlocksService]
})
export class BlocksModule {}
