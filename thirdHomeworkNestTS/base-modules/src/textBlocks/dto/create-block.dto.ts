import { ApiProperty } from "@nestjs/swagger";

export class CreateBlockDto { 
    @ApiProperty({example: 'main-hero-text', description: 'Unique system name'}) 
    readonly systemName:string;

    @ApiProperty({example: 'main-page', description: 'Search group'}) 
    readonly group:string;

    @ApiProperty({example: 'Title', description: 'Post title'}) 
    readonly title: string;

    @ApiProperty({example: 'Text', description: 'Post content'}) 
    readonly content: string;

    @ApiProperty({example: '1', description: 'Image ID from database'}) 
    readonly imageID?: number;

}