import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { json } from 'sequelize';
import { AuthService } from './auth.service';
import { Cookies } from '../decorators/cookie-decorator';
import { LoginUserDto } from './dto/login.dto';

@ApiTags('Authentification')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}
    
    @ApiOperation({summary: 'Log in. Response: Access token'})
    @ApiResponse({status: 200, type: json})
    @Post('/login')
    login(@Body() userDto: LoginUserDto, @Res({ passthrough: true }) response: Response) {
        return  this.authService.login(userDto, response)
    }

    @ApiOperation({summary: 'Log out - kill refresh token (cookies & database)'})
    @ApiResponse({status: 200})
    @Get('logout')
    logout(@Cookies('refreshToken') refreshToken, @Res({ passthrough: true }) response: Response) {
       return this.authService.logout(refreshToken, response);
    }

}
