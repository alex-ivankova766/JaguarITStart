import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto { //Data Transfer Object
    @ApiProperty({example: '1', description: 'User ID'}) // for connecting with Swagger
    readonly userID: number;

    @ApiProperty({example: 'Spam', description: 'Ban reason'}) // for connecting with Swagger
    readonly banReason: string;
}