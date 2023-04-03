import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs'
import { TokensService } from 'src/tokens/tokens.service';
import { LoginUserDto } from './dto/login.dto';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
        private tokenService: TokensService
        ) {}

    async login(userDto: LoginUserDto, response) {
        const id = await this.validateUser(userDto);
        const tokens = await this.tokenService.generateToken({...userDto, id: id});
        await this.tokenService.saveToken(id, tokens.refreshToken);
        response.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000}) 
        return { accessToken: tokens.accessToken }   
    }

    async logout(refreshToken, response) {
        await this.tokenService.removeToken(refreshToken);
        response.cookie('refreshToken', null);
    }

    private async validateUser(userDto: LoginUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        let id;
        let passwordEquals;
        if (user) {
            id = user.id;
            passwordEquals = await bcrypt.compare(userDto.password, user.password);
        }

        if (passwordEquals) {
            return id;
        }
        else {
            throw new UnauthorizedException({message: 'E-mail or password is incorrect'})
        }
    }
}
