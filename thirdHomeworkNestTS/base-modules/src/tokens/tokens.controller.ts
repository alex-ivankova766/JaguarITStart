import { Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { json } from 'sequelize';
import { Cookies } from 'src/decorators/cookie-decorator';
import { TokensService } from './tokens.service';

@ApiTags('Tokens')
@Controller('tokens')
export class TokenController {

    constructor(private tokenService: TokensService) {}
    
    @ApiOperation({summary: 'Log in. Response: Access token'})
    @ApiResponse({status: 200, type: json})
    @Post('/refresh')
    refresh(@Cookies('refreshToken') token) {
        return  this.tokenService.refresh(token)
    }

}
