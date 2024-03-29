import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserRoles } from "src/linkingTables/user-roles.model";
import { User } from "src/users/users.model";

interface RoleCreationAttrs {

    value: string;
    description: string;

}

@Table( {tableName: 'roles', createdAt: false, updatedAt: false})
export class Role extends Model<Role, RoleCreationAttrs> { 

    @ApiProperty({example: '1', description: 'Unique identifier'}) 
    @Column( {type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true}) 
    id: number; 

    @ApiProperty({example: 'admin', description: 'User role'})
    @Column( {type: DataType.STRING, unique: true, allowNull: false})
    roleName:string;

    @ApiProperty({example: 'Superuser', description: 'About role'}) 
    @Column( {type: DataType.STRING, allowNull: false})    
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];

}