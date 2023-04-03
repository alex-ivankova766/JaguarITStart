import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { IsEmail, Length } from "class-validator"

export class CreateUserDto { //Data Transfer Object
    @ApiProperty({example: 'name@post.com', description: 'e-mail address'}) // for connecting with Swagger
    @IsString({message: 'Value must be a type of String'})
    @IsEmail({}, {message: 'E-mail is incorrect'})
    readonly email: string;

    @ApiProperty({example: '******', description: 'Secret password'}) // for connecting with Swagger
    @IsString({message: 'Value must be a type of String'})
    @Length(4, 16, {message: 'Password must be more than 4 symbols and less than 16.'})
    readonly password: string;
}