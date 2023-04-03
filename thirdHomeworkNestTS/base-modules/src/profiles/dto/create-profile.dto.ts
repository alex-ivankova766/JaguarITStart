import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { IsEmail, Length } from "class-validator"

export class CreateProfileDto { 

    @ApiProperty({example: 'name@post.com', description: 'e-mail address'}) 
    @IsString({message: 'Value must be a type of String'})
    @IsEmail({}, {message: 'E-mail is incorrect'})
    readonly email: string;

    @ApiProperty({example: '******', description: 'Secret password'}) 
    @IsString({message: 'Value must be a type of String'})
    @Length(4, 16, {message: 'Password must be more than 4 symbols and less than 16.'})
    readonly password: string;

    @ApiProperty({example: 'Alex', description: 'Name'}) 
    @IsString({message: 'Value must be a type of String'})
    readonly name?: string;

    @ApiProperty({example: 'Ivankova', description: 'Surname'})
    @IsString({message: 'Value must be a type of String'})
    readonly surname?: string;

    @ApiProperty({example: '3466357', description: 'Surname'})
    @IsString({message: 'Value must be a type of String'})
    @Length(5, 12, {message: 'Phone must be more than 5 symbols and less than 12.'})
    readonly phone?: string;
}