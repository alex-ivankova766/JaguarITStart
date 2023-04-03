import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto { //Data Transfer Object
    @IsString({message: 'Must be a type of String'})
    @ApiProperty({example: 'admin', description: 'User role'}) // for connecting with Swagger
    readonly value: string;

    @IsNumber({}, {message: 'Must be a type of number'})
    @ApiProperty({example: '1', description: 'User ID'}) // for connecting with Swagger
    readonly userID: number;
}