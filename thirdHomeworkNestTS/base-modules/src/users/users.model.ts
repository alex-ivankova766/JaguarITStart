import { ApiProperty } from "@nestjs/swagger";
import { AutoIncrement, BelongsToMany, Column, DataType, HasMany, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { UserRoles } from "src/linkingTables/user-roles.model";
import { Role } from "src/roles/roles.model";

interface UserCreationAttrs { 
    email: string;
    password: string;
}

@Table( {tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({example: '1', description: 'Unique identifier'}) 
    @AutoIncrement
    @Unique
    @PrimaryKey
    @Column( {type: DataType.INTEGER, primaryKey: true})
    id: number;

    @ApiProperty({example: 'name@post.com', description: 'e-mail address'}) 
    @Column( {type: DataType.STRING, unique: true, allowNull: false})
    email:string;

    @ApiProperty({example: '******', description: 'Secret password'}) 
    @Column( {type: DataType.STRING, allowNull: false})    
    password: string;
    
    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

}