import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto { 
    @IsString({message: 'Must be a type of String'})
    @ApiProperty({example: 'admin', description: 'User role'})
    readonly roleName: string;

    @IsNumber({}, {message: 'Must be a type of number'})
    @ApiProperty({example: '1', description: 'User ID'})
    readonly id : number;
}