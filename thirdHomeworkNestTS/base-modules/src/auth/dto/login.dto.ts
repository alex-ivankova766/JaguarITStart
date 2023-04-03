import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto { 
    @ApiProperty({example: 'name@post.com', description: 'e-mail address'})
    email: string;

    @ApiProperty({example: '******', description: 'Secret password'})
    password: string;

    constructor(model) {
        this.email = model.email;
        this.password = model.password;
    }
}