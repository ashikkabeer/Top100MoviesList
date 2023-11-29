import express, { Request, Response, Application } from 'express';
import axios, { AxiosResponse } from 'axios';
import * as dotenv from 'dotenv';

//change it for tv shows
export default class ShowService {
    async latestShows(req: Request, res: Response): Promise<void> {
        try {
            const page: number = parseInt(req.query.page as string) || 1;
            const authtoken = process.env.ACCESS_TOKEN_AUTH;
            const url = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
            const headers = {
                accept: 'application/json',
                Authorization: `Bearer ${authtoken}`,
            };
            const response: AxiosResponse = await axios.get(url, { headers });
            const data = response.data.results;

            const movieData = data.map((movie: any) => ({
                id: movie.id,
                title: movie.original_title,
                overview: movie.overview,
                poster: `https://image.tmdb.org/t/p/w500/` + movie.poster_path,
                adult: movie.adult,
            }));

            res.status(200).send(movieData);

        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error!',
            });
        }
    }

    //render full movie details by id

    async showDetails(req: Request, res: Response): Promise<void> {}

    //search movie by name

    //render movie by genre

    //render movie by year

    //render movie by rating

    //render movie by language

    //render movie by country

    //render movie by actor

    //render movie by director

    //render movie by producer

    //render movie by writer

    //currently in theatre
}
