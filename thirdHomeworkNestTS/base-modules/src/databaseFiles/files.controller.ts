import { Controller, Delete, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/auth/guards/admin-guard';
import { DatabaseFilesService } from './files.service';

@Controller('files')
@ApiTags('Files')
export class DbFilesController {

    constructor(private dbFilesService: DatabaseFilesService) {
    }

    @ApiOperation({summary: 'Clean unused files (Admin or programm code only)'})
    @ApiResponse({status: 200})
    @UseGuards(AdminGuard)
    @Delete('/clean')
    cleanUnusedFiles() {
        return this.dbFilesService.cleanUnusedFiles();
    }

    @ApiOperation({summary: 'Upload file (Admin only)'})
    @ApiResponse({status: 200, type: Number})
    @UseGuards(AdminGuard)
    @UseInterceptors(FileInterceptor('file'))
    @Post()
    create(@UploadedFile() file) {
        return this.dbFilesService.uploadFile(file);
    }
}
