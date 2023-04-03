import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

@Table( {tableName: 'profiles', createdAt: false, updatedAt: false})
export class Profile extends Model<Profile> {
    
    @ApiProperty({example: 'Alex', description: 'Name'}) 
    @Column( {type: DataType.STRING})
    name:string;

    @ApiProperty({example: 'Ivankova', description: 'Surname'}) 
    @Column( {type: DataType.STRING})    
    surname: string;

    @ApiProperty({example: 'Ivankova', description: 'Surname'}) 
    @Column( {type: DataType.STRING})  
    phone: string;

    @ForeignKey( () => User)
    @Column({type: DataType.INTEGER, primaryKey: true})
    id: number;

}