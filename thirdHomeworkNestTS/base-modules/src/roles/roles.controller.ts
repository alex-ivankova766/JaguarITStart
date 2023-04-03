import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/auth/guards/admin-guard';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @ApiOperation({summary: 'Create role (admin or programm code only)'})
    @ApiResponse({status: 200})
    @Post()
    @UseGuards(AdminGuard)
    create(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto);
    }

    @ApiOperation({summary: 'Get role by name (admin or programm code only)'})
    @ApiResponse({status: 200})
    @Get('/:roleName')
    @UseGuards(AdminGuard)
    getRoleByName(@Param('roleName') roleName: string) {
        return this.roleService.getRoleByName(roleName);
    }

    @ApiOperation({summary: 'Get all roles list (admin or programm code only)'})
    @ApiResponse({status: 200})
    @Get()
    @UseGuards(AdminGuard)
    getAllRoles() {
        return this.roleService.getAllRoles();
    }
}
