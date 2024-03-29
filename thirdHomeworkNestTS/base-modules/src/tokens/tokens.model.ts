import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

@Table( {tableName: 'tokens'}) 
export class Token extends Model<Token> {

    @ApiProperty({example: '1', description: 'Unique identifier'}) 
    @ForeignKey(() => User)
    @Column( {type: DataType.INTEGER, primaryKey: true})
    id: number;

    @ApiProperty({example: 'sfg#gr.seg632.r42Rfas', description: 'Refresh token'}) 
    @Column( {type: DataType.TEXT, allowNull: true})    
    refreshToken: string;
}