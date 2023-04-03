import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AddRoleDto } from 'src/roles/dto/add-role.dto';
import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService
    ) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByName("user");
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user;
    }
    
    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}});
        return users.slice(1);
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}});
        return user;
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findOne({where: {id: id}, include: {all: true}});
        return user;
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.id);
        const role = await this.roleService.getRoleByName(dto.roleName);
        if (role && user) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new HttpException('User or role is not found', HttpStatus.NOT_FOUND)
    }

    async initial() {
        await this.roleService.createRole({"roleName": "admin", "description": "Super user"})
        await this.roleService.createRole({"roleName": "user", "description": "Standart role"})

        const candidate = await this.getUserByEmail(process.env.ADMIN_MAIL);
        if (candidate) {
            throw new HttpException(`Admin already exists`, HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 5);
        
        const admin = await this.createUser({"email": process.env.ADMIN_MAIL,
                "password": hashPassword})

        const role = await this.roleService.getRoleByName("admin");
        await admin.$set('roles', [role.id])
        admin.roles = [role]    
        
        return 'Admin created' // for testing with postman
    }

    async deleteUser(id) {
        await this.userRepository.destroy({where: {id: id}});
        return `User with id ${id} deleted`
    }
}
