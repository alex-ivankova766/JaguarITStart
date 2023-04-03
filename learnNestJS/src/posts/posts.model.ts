import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface PostCreationAttrs { // these are the props needs to create User

    title: string;
    content: string;
    userId: number;
    image: string;

}

@Table( {tableName: 'posts'}) // this class will be a table in database
export class Post extends Model<Post, PostCreationAttrs> { // generics at Model<User> or Model<UserCreationAttrs>

    @ApiProperty({example: '1', description: 'Unique identifier'}) // for connecting with a Swagger
    @Column( {type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true}) // column's sql-properties
    id: number; // column's name, type.ts

    @ApiProperty({example: 'Day 1', description: 'Title'}) // for connecting with a Swagger
    @Column( {type: DataType.STRING, unique: true, allowNull: false})
    title:string;

    @ApiProperty({example: 'It is a beautiful day', description: 'Post content'}) // for connecting with a Swagger
    @Column( {type: DataType.STRING, allowNull: false})    
    content: string;

    @ApiProperty({example: '12.jpg', description: 'Image name'}) // for connecting with a Swagger
    @Column( {type: DataType.STRING})
    image: string;

    @ForeignKey( () => User)
    @Column({type: DataType.INTEGER})
    userID: number;

    @BelongsTo(() => User)
    author: User;

}