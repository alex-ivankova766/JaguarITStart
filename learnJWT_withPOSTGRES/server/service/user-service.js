import UserModel from '../models/user.model.js';
import bcrypt from 'bcrypt';
import * as uuid from 'uuid';
import { mailService } from './mail-service.js';
import { tokenService } from './token-service.js';
import { UserDto } from '../dtos/user-dto.js';
import dotenv from "dotenv";
import {ApiError} from '../exceptions/api-error.js';
dotenv.config();


class UserService {
    async registration(email, password) {

        const candidate = await UserModel.findOne({where: {email: email}});
        if (candidate) {          
            throw ApiError.BadRequest(`User with email ${email} already exists`)
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const activationLink = uuid.v4();


        const user = await UserModel.create(
            {
              email: email,
              password: hashPassword,
              activationLink: activationLink
            },
          )

        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);


          const userDto = new UserDto(user);
          const tokens = await tokenService.generateTokens({...userDto});
          await tokenService.saveToken(userDto.id, tokens.refreshToken);
          
          return {...tokens, user: userDto};
    }

    async activate(activationLink) {

      let user = await UserModel.findOne({where: {activationLink: activationLink}})

      if (!user) {
        throw ApiError.BadRequest("Activation link is incorrect")
      }
      user.isActivated = true;
      await user.save();
    }

    async login(email, password) {
      const user = await UserModel.findOne({where: {email: email}})
      if (!user) {
        throw ApiError.BadRequest(`User with email ${email} not found!`);
      }
      const isPasswordEquals = await bcrypt.compare(password, user.password);
      if (!isPasswordEquals) {
        throw ApiError.BadRequest('The password is incorrect!');
      }
      const userDto = new UserDto(user);
      const tokens = await tokenService.generateTokens({...userDto});
      await tokenService.saveToken(userDto.id, tokens.refreshToken);
          
      return {...tokens, user: userDto};

    }

    async logout(refreshToken) {
      const token = tokenService.removeToken(refreshToken);
    }

    async refresh(refreshToken) {
      if (!refreshToken) {
        throw ApiError.UnauthorizedError();
      }
      const userData = tokenService.validateRefreshToken(refreshToken);
      const tokenFromDb = await tokenService.findToken(refreshToken);
      if (!userData || !tokenFromDb) {
        throw ApiError.UnauthorizedError();
      }

      const user = await UserModel.findOne({where: {id: userData.id}});
      const userDto = new UserDto(user);
      const tokens = await tokenService.generateTokens({...userDto});
      await tokenService.saveToken(userDto.id, tokens.refreshToken);
          
      return {...tokens, user: userDto};

    }

    async getAllUsers() {
      const users = await UserModel.findAll()
      return users;
    }
}

export const userService = new UserService();
