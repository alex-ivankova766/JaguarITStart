import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { UsersService } from 'src/users/users.service';
import { UserDto } from './dto/user.dto';
import { Token } from './tokens.model';

@Injectable()
export class TokensService {

    constructor(@InjectModel(Token) private tokenRepo: typeof Token,
        private jwtService: JwtService,
        private userService: UsersService) {}

    async generateToken(payload) {
        
        const refreshToken = this.jwtService.sign(payload, {secret: process.env.JWT_REFRESH_SECRET, expiresIn: '30d' });
        const accessToken = this.jwtService.sign(payload, {secret: process.env.JWT_ACCESS_SECRET, expiresIn: '15m' });

        return {refreshToken, accessToken}
    }

    async validateRefreshToken(token) {
        try {
            const userData = this.jwtService.verify(token, {secret: process.env.JWT_REFRESH_SECRET});
            return userData;
        } catch(e) {
            return null;
        } 
    }

    async validateAccessToken(token) {
        try {
            const userData = this.jwtService.verify(token, {secret: process.env.JWT_ACCESS_SECRET});
            return userData;
        } catch(e) {
            return null;
        } 
    }

    async saveToken(id, refreshToken) {
        const tokenData = await this.tokenRepo.findOne({
            where: {
              id: id,
            },
        });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return await tokenData.save();
        }

        const token = await this.tokenRepo.create({
            id: id,
            refreshToken: refreshToken
        })
        return token;
    }

    async removeToken(token) {
        const tokenData = await this.tokenRepo.destroy({
            where: {
              refreshToken: token,
            },
        });
        return tokenData;
    }

    async findToken(token) {
        const tokenData = await this.tokenRepo.findOne({where: {refreshToken: token}});
        return tokenData;
    }

    async refresh(token) {
        if (!token) {
          throw new UnauthorizedException();
        }
        const userData = await this.validateRefreshToken(token);
        const tokenFromDb = await this.findToken(token);
        if (!userData || !tokenFromDb) {
            throw new UnauthorizedException();
        }
  
        const user = await this.userService.getUserById(userData.id);
        const userDto = new UserDto(user);
        const tokens = await this.generateToken({...userDto});
        await this.saveToken(userDto.id, tokens.refreshToken);
            
        return {...tokens, user: userDto}; 
      }
}
