import {Model, Table, Column, DataType} from "sequelize-typescript"
import {Gender} from './gender'
@Table({
    tableName: "Users"
})

export default class User extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        field:"id"
    })
    id?:number;

    @Column({
        type:DataType.STRING(50),
        field:"name"
    })
    title?:string

    @Column({
        type:DataType.STRING(50),
        field: "bio"
    })
    title?: string;

    @Column({
        type:DataType.ENUM,
        field: "gender"
    })
    gender: Gender
    
}
