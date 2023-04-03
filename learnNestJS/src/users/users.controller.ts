import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles-guard';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { AddRoleDto } from 'src/roles/dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Users') // that name is using in Swagger
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {
    }

    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: 200, type: User})
    // @UsePipes(ValidationPipe)
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status: 200, type: [User]})
    @Roles("user")
    @UseGuards(RolesGuard)
    // @UseGuards(JwtAuthGuard) guard for getAll()
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({summary: 'Assign a role'})
    @ApiResponse({status: 200})
    @Roles("admin")
    @UseGuards(RolesGuard)
    // @UseGuards(JwtAuthGuard) guard for getAll()
    @Post('/role') 
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto);
    }

    @ApiOperation({summary: 'Ban user'})
    @ApiResponse({status: 200})
    @Roles("admin")
    @UseGuards(RolesGuard)
    // @UseGuards(JwtAuthGuard) guard for getAll()
    @Post('/ban') 
    ban(@Body() dto: BanUserDto) {
        return this.usersService.ban(dto);
    }
}