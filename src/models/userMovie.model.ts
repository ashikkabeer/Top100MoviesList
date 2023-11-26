// models/userMovieModel.ts

import { Model, Table, ForeignKey, Column, DataType } from 'sequelize-typescript';
import User from './user.model';
import Movie from './movie.model';

@Table({
    tableName: 'UserMovies',
})
class UserMovie extends Model {
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        field: 'userId',
        primaryKey: true,
    })
    userId?: number;

    @ForeignKey(() => Movie)
    @Column({
        type: DataType.INTEGER,
        field: 'movieId',
        primaryKey: true,
    })
    movieId?: number;
}

export default UserMovie;
