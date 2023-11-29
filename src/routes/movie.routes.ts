import { Router } from "express";
import MovieController from "../controllers/movie.controller";
import MovieService from "../services/movieApi.services";
import apiHeaderMiddleware from "../middlewares/apiHeaderMiddleware";
class movieRoutes {
    router = Router()
    controller = new MovieController();
    service = new MovieService();

    constructor() {
        this.initializeRoutes();
    }
    initializeRoutes(){
        this.router.post('/',this.controller.create); //add a movie to the favorites list
        // this.router.get('/',this.controller.findAll); //show all the favorited movies: comes in user route
        // this.router.get('/:id',this.controller.findOne); //show a single movie info: make it a service
        this.router.delete('/:id',this.controller.delete); //delete a single movie from the list: //comes in user route

        this.router.get('/',this.service.latestMovies);
        this.router.get('/:id',this.service.movieDetails);

    }
}

export default new movieRoutes().router;