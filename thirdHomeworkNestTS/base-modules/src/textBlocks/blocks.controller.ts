import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/auth/guards/admin-guard';
import { TextBlock } from './blocks.model';
import { BlocksService } from './blocks.service';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';

@Controller('posts')
@ApiTags('Text blocks')
export class BlocksController {

    constructor(private blockService: BlocksService) {
    }

    @ApiOperation({summary: 'Create text block (Admin only)'})
    @ApiResponse({status: 200, type: Number})
    @UseGuards(AdminGuard)
    @Post('/create')
    createBlock(@Body() dto: CreateBlockDto) {
        return this.blockService.create(dto)
    }

    @ApiOperation({summary: 'Get all text blocks'})
    @ApiResponse({status: 200, type: [TextBlock]})
    @Get()
    getBlocks() {
        return this.blockService.getAllBlocks();
    }

    @ApiOperation({summary: 'Get text blocks filtered by group'})
    @ApiResponse({status: 200, type: [TextBlock]})
    @Get('/:groupName')
    getBlocksByGroup(@Param('groupName') groupName: string) {
        return this.blockService.getBlocksByGroup(groupName);
    }

    @ApiOperation({summary: 'Update text block (Admin only)'})
    @ApiResponse({status: 200, type: TextBlock})
    @UseGuards(AdminGuard)
    @Post('/update')
    updateBlock(@Body() dto: UpdateBlockDto) {
        return this.blockService.updateBlock(dto);
    }

    @ApiOperation({summary: 'Delete text block (Admin only)'})
    @ApiResponse({status: 200})
    @UseGuards(AdminGuard)
    @Delete('/delete/:id')
    deleteBlock(@Param('id') id: number) {
        return this.blockService.deleteBlock(id);
    }
}
