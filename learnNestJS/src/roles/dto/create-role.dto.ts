import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto { //Data Transfer Object
    @ApiProperty({example: 'admin', description: 'User role'}) // for connecting with Swagger
    readonly value: string;

    @ApiProperty({example: 'Super user', description: 'About role'}) // for connecting with Swagger
    readonly description: string;
}