import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { UploadFolderService } from 'src/upload-folder-module/upload-folder.service';
import {DatabaseFile} from './files.model';
 
@Injectable()
export class DatabaseFilesService {
  constructor(
    @InjectModel(DatabaseFile) private dbFilesRepository: typeof DatabaseFile,
    private uploadFolderService: UploadFolderService
  ) {}

 
  async getFileByPath(filePath: string) {
    const file = await this.dbFilesRepository.findOne({where: {path: filePath}});
    if (!file) {
      throw new NotFoundException();
    }
    return file;
  }

  async getFileByID(id: number) {
    const file = await this.dbFilesRepository.findOne({where: {id: id}});
    if (!file) {
      throw new NotFoundException();
    }
    return file;
  }

  async saveDatabaseFile(id: number, essenceTable: string, essenceID: number) {
    const file = await this.getFileByID(id);
    file['essenceTable'] = essenceTable;
    file['essenceID'] = essenceID; 
    return await file.save();
  }

  async deleteDbFile(path: string) {
    const file = await this.dbFilesRepository.findOne({where: {path: path}});
    await this.dbFilesRepository.destroy({where: {path: path}});
    return `File ${file.filename} deleted from Database`
    }

  async cleanUnusedFiles() {
    const requiredTime = new Date(Date.now() - 3600000);
    const files = await this.dbFilesRepository.findAll({where: 
      {essenceID: null, essenceTable: null, createdAt: {[Op.lte]: requiredTime}}
    })
    for (let file of files) {
      this.uploadFolderService.deleteFile(file.filename);
      this.dbFilesRepository.destroy({where: {id: file.id}});
    }
  }

  async uploadFile(fileContent) {
    const fileName = await this.uploadFolderService.createFile(fileContent);
    const dbFile = await this.dbFilesRepository.create({
      filename: fileName,
      content: fileContent
    })
    return dbFile.id;
  }
}
 