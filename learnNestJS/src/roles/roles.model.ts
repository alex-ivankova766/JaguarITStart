import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserRoles } from "src/linkingTables/user-roles.model";
import { User } from "src/users/users.model";

interface RoleCreationAttrs { // these are the props needs to create User

    value: string;
    description: string;

}

@Table( {tableName: 'roles'}) // this class will be a table in database
export class Role extends Model<Role, RoleCreationAttrs> { // generics at Model<User> or Model<UserCreationAttrs>

    @ApiProperty({example: '1', description: 'Unique identifier'}) // for connecting with a Swagger
    @Column( {type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true}) // column's sql-properties
    id: number; // column's name, type.ts

    @ApiProperty({example: 'admin', description: 'User role'}) // for connecting with a Swagger
    @Column( {type: DataType.STRING, unique: true, allowNull: false})
    value:string;

    @ApiProperty({example: 'Superuser', description: 'About role'}) // for connecting with a Swagger
    @Column( {type: DataType.STRING, allowNull: false})    
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];

}