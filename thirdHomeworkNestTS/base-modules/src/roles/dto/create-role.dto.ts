import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto { 
    @ApiProperty({example: 'admin', description: 'User role'}) 
    readonly roleName: string;

    @ApiProperty({example: 'Super user', description: 'About role'})
    readonly description: string;
}