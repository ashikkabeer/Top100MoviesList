// models/movieModel.ts

import {
    Model,
    Table,
    Column,
    DataType,
    BelongsToMany,
} from 'sequelize-typescript';
import User from './user.model';

@Table({
    tableName: 'Movies',
})
class Movie extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
    })
    id?: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        field: 'title',
    })
    title!: string;

    @Column({
        type: DataType.TEXT,
        field: 'overview',
    })
    overview?: string;

    @Column({
        type: DataType.STRING(255),
        field: 'poster',
    })
    poster?: string;

    @Column({
        type: DataType.STRING(50),
        field: 'genre',
    })
    genre?: string[];

    @Column({
        type: DataType.STRING(50),
        field: 'director',
    })
    director?: string;

    @Column({
        type: DataType.STRING(50),
        field: 'language',
    })
    language?: string;

    @Column({
        type: DataType.ENUM('movie', 'series', 'anime'),
        field: 'category',
    })
    category?: 'movie' | 'series' | 'anime';

    @Column({
        type: DataType.STRING(50),
        field: 'certification',
    })
    certification?: string;

    @Column({
        type: DataType.INTEGER,
        field: 'runtime',
    })
    runtime?: number;

    @Column({
        type: DataType.INTEGER,
        field: 'releaseYear',
    })
    releaseYear?: Date;

    @BelongsToMany(() => User, () => User)
    favoritedBy?: User[];
}

export default Movie;
