import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { UploadFolderModule } from 'src/upload-folder-module/upload-folder.module';
import { DbFilesController } from './files.controller';
import {DatabaseFile} from './files.model';
import {DatabaseFilesService} from './files.service';

@Module({
  controllers: [DbFilesController],
  providers: [DatabaseFilesService],
  exports: [DatabaseFilesService],
  imports:[SequelizeModule.forFeature([DatabaseFile]),
            UploadFolderModule,
          AuthModule]
})
export class DatabaseFilesModule {}
