import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './profiles.model';
import * as bcrypt from 'bcryptjs'
import { TokensService } from 'src/tokens/tokens.service';

@Injectable()
export class ProfilesService {

    constructor(@InjectModel(Profile) private profileRepository: typeof Profile,
    @InjectModel(User) private userRepository: typeof User,
    private userService: UsersService,
    private tokenService: TokensService

    ){}

    async registration(profileDTO: CreateProfileDto) {
        const candidate = await this.userService.getUserByEmail(profileDTO.email);
        if (candidate) {
            throw new HttpException(`A user with email ${profileDTO.email} already exists`, HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(profileDTO.password, 5);
        const user = await this.userService.createUser({...profileDTO, password: hashPassword});
        await this.createProfile(profileDTO, user.id);
        const payload = {email: user.email, userID: user.id, roles: user.roles}
        return this.tokenService.generateToken(payload)
  
    }

    async createProfile(dto: CreateProfileDto, id) {
        const profile = await this.profileRepository.create({...dto, id: id});
        return profile;
    }

    async getAllProfiles() {
        const users = await this.profileRepository.findAll({include: {all: true}});
        return users;
    }

    async updateProfile(dto: UpdateProfileDto) {
        const profile = await this.profileRepository.findOne({where: {id: dto.id}});
        for (let prop in dto) {
            profile[prop] = dto[prop];
        }
        return await profile.save();
    }

    async deleteProfile(id) {
        await this.profileRepository.destroy({where: {id: id}});
        await this.userRepository.destroy({where: {id: id}});
        return `Profile with id ${id} deleted`
    }

}
