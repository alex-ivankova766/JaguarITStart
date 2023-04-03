import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { UserRoles } from "src/linkingTables/user-roles.model";
import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/roles.model";

interface UserCreationAttrs { // these are the props needs to create User

    email: string;
    password: string;

}

@Table( {tableName: 'users'}) // this class will be a table in database
export class User extends Model<User, UserCreationAttrs> { // generics at Model<User> or Model<UserCreationAttrs>

    @ApiProperty({example: '1', description: 'Unique identifier'}) // for connecting with a Swagger
    @Column( {type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true}) // column's sql-properties
    id: number; // column's name, type.ts

    @ApiProperty({example: 'name@post.com', description: 'e-mail address'}) // for connecting with a Swagger
    @Column( {type: DataType.STRING, unique: true, allowNull: false})
    email:string;

    @ApiProperty({example: '******', description: 'Secret password'}) // for connecting with a Swagger
    @Column( {type: DataType.STRING, allowNull: false})    
    password: string;

    @ApiProperty({example: 'false', description: 'Is user banned?'}) // for connecting with a Swagger
    @Column( {type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'Spam', description: 'Why is the user banned'}) // for connecting with a Swagger
    @Column( {type: DataType.STRING})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany( () => Post)
    posts: Post[];
}