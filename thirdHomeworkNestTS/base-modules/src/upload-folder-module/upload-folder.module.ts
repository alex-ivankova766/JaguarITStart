import { Module } from '@nestjs/common';
import { UploadFolderService } from './upload-folder.service';

@Module({
  providers: [UploadFolderService],
  exports: [UploadFolderService]
})
export class UploadFolderModule {}
