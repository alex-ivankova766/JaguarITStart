import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role,
    ) {}

    async createRole(dto: CreateRoleDto) {
        const role = await this.roleRepository.create(dto);
        return role;
    } 

    async getRoleByName(roleName: string) {
        const role = await this.roleRepository.findOne({where: {roleName: roleName}})
        return role;
    }

    async getAllRoles() {
        const roles = await this.roleRepository.findAll();
        return roles;
    }
}
