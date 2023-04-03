import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto { //Data Transfer Object
    @ApiProperty({example: 'Title', description: 'Post title'}) // for connecting with Swagger
    readonly title: string;

    @ApiProperty({example: 'Text', description: 'Post content'}) // for connecting with Swagger
    readonly content: string;

    @ApiProperty({example: '1', description: 'Author ID'}) // for connecting with Swagger
    readonly userID: number;

    @ApiProperty({example: 'Flower', description: 'Image name'}) // for connecting with Swagger
    readonly image: string;
}