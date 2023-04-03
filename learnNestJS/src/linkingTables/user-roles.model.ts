import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { User } from "src/users/users.model";


@Table( {tableName: 'user_roles', createdAt: false, updatedAt: false}) // this class will be a table in database
export class UserRoles extends Model<UserRoles> { // generics at Model<User> or Model<UserCreationAttrs>

    @Column( {type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true}) // column's sql-properties
    id: number; // column's name, type.ts

    @ForeignKey(() => Role)
    @Column( {type: DataType.INTEGER})
    roleID:number;

    @ForeignKey(() => User)
    @Column( {type: DataType.INTEGER})    
    userID: number;

}