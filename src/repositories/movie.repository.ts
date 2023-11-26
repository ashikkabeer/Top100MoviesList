import Movie from '../models/movie.model';
import { Op } from 'sequelize';

interface IMovieRepository {
    save(user: Movie): Promise<Movie>;
    retrieveAll(searchParams: { title: string }): Promise<Movie[]>;
    retrieveById(userId: number): Promise<Movie | null>;
    delete(userId: number): Promise<number>;
    deleteAll(): Promise<number>;
}
interface SearchCondition {
    [key: string]: any;
}
class MovieRepository implements IMovieRepository {
    async save(movie: Movie): Promise<Movie> {
        try {
            return await Movie.create({movie});
        } catch (error) {
            throw new Error('failed to create the user');
        }
    }

    async retrieveAll(searchParams: { title?: string }): Promise<Movie[]> {
        try {
            let condition: SearchCondition = {};

            if (searchParams?.title)
                condition.title = { [Op.iLike]: `%${searchParams.title}%` };

            return await Movie.findAll({ where: condition });
        } catch (error) {
            throw new Error('Failed to retrieve all Movies!');
        }
    }

    async retrieveById(movieId: number): Promise<Movie | null> {
        try {
            return await Movie.findByPk(movieId);
        } catch (error) {
            throw new Error('Failed to retirieve Movie');
        }
    }

    async delete(movieId: number): Promise<number> {
        try {
            const affectedRows = await Movie.destroy({ where: { id: movieId } });

            return affectedRows;
        } catch (error) {
            throw new Error('Failed to delete Movies!');
        }
    }

    async deleteAll(): Promise<number> {
        try {
            return Movie.destroy({
                where: {},
                truncate: false,
            });
        } catch (error) {
            throw new Error('Failed to delete Movies!');
        }
    }
    
}

export default new MovieRepository();
