import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Length } from "class-validator"

export class UpdateProfileDto { 
    @ApiProperty({example: 1, description: 'userID'}) 
    readonly id: number;

    @ApiProperty({example: 'Alex', description: 'Name'}) 
    @IsString({message: 'Value must be a type of String'})
    readonly name?: string;

    @ApiProperty({example: 'Ivankova', description: 'Surname'}) 
    @IsString({message: 'Value must be a type of String'})
    readonly surname?: string;

    @ApiProperty({example: '3453453', description: 'Surname'}) 
    @IsString({message: 'Value must be a type of String'})
    @Length(5, 12, {message: 'Phone must be more than 5 symbols and less than 12.'})
    readonly phone?: string;
}