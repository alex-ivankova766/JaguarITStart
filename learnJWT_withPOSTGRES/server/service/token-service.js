import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
import TokenModel from '../models/token.model.js';


class TokenService {
    async generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '15m'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch(e) {
            return null;
        } 
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch(e) {
            return null;
        } 
    }


    async saveToken(userID, refreshToken) {
        const tokenData = await TokenModel.findOne({
            where: {
              user: userID,
            },
        });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return await tokenData.save();
        }

        const token = await TokenModel.create({
            user: userID,
            refreshToken: refreshToken
        })
        return token;
    }

    async removeToken(token) {
        const tokenData = await TokenModel.destroy({where: {refreshToken: token}});
        return tokenData;
    }

    async findToken(token) {
        const tokenData = await TokenModel.findOne({where: {refreshToken: token}});
        return tokenData;
    }
}

export const tokenService = new TokenService();