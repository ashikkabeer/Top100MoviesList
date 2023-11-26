import { Model, Table, Column, DataType } from 'sequelize-typescript';


@Table({
    tableName: 'Users',
})
export default class User extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
    })
    id?: number;

    @Column({
        type: DataType.STRING(50),
        field: 'name',
    })
    name?: string;

    @Column({
        type: DataType.STRING(50),
        field: 'bio',
    })
    bio?: string;

    @Column({
        type: DataType.ENUM('male', 'female', 'other'),
        field: 'gender',
    })
    gender!: 'male' | 'female' | 'other';
}
