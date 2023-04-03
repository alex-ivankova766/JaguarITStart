import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/auth/guards/admin-guard';
import { AddRoleDto } from 'src/roles/dto/add-role.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('This is service tools over service auth table "user"')
@Controller('users') 
export class UsersController {

    constructor(private usersService: UsersService) {
    }

    @ApiOperation({summary: 'First of all: add admin and base User role to database'})
    @ApiResponse({status: 200})
    @Post('/initial') 
    initial() {
        return this.usersService.initial();
    }

    @ApiOperation({summary: 'Create user (admin or programm code only)'})
    @ApiResponse({status: 200, type: User})
    @UseGuards(AdminGuard)
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary: 'Get all users (admin or programm code only)'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(AdminGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({summary: 'Assign a role (admin or programm code only)'})
    @ApiResponse({status: 200})
    @UseGuards(AdminGuard)
    @Post('/role') 
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto);
    }

    @ApiOperation({summary: 'Delete user (admin or programm code only)'})
    @ApiResponse({status: 200})
    @UseGuards(AdminGuard)
    @Delete('/delete/:id')
    deleteProfile(@Param('id') id: number) {
        return this.usersService.deleteUser(id);
    }
}