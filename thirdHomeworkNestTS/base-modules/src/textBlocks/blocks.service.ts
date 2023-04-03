import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DatabaseFilesService } from 'src/databaseFiles/files.service';
import { TextBlock } from './blocks.model';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';

@Injectable()
export class BlocksService {

    constructor(@InjectModel(TextBlock) private blocksRepository: typeof TextBlock,
            private databaseFileService: DatabaseFilesService
    ) {}

    async create(dto: CreateBlockDto) {
        const block = await this.blocksRepository.create(dto);
        if (block.imageID) {
            const dbFile = await this.databaseFileService.getFileByID(block.imageID);
            dbFile.essenceID = block.id;
            dbFile.essenceTable = 'textblocks';
            await dbFile.save();
        }
        return block.id;
    }

    async getAllBlocks() {
        return await this.blocksRepository.findAll();
    }

    async getBlocksByGroup(group) {
        return await this.blocksRepository.findAll({where: {group: group}});
    }

    async updateBlock(dto: UpdateBlockDto) {
        const block = await this.blocksRepository.findOne({where: {id: dto.id}});
        for (let prop in dto) {
            block[prop] = dto[prop];
        }
        return await block.save();
    }

    async deleteBlock(id: number) {
        const block = await this.blocksRepository.findOne({where: {id: id}});
        if (block.imageID) {
            const file = await this.databaseFileService.getFileByID(block.imageID)
            file.essenceTable = null;
            file.essenceID = null;
            await file.save();
        }
        await this.blocksRepository.destroy({where: {id: id}});
        return `Block ${id} deleted` // for testing with postman
    }
}
