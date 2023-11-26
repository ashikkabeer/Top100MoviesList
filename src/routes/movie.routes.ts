import { Router } from "express";
import MovieController from "../controllers/movie.controller";
import api from "../services/movieApi.services";
class movieRoutes {
    router = Router()
    controller = new MovieController();

    constructor() {
        this.initializeRoutes();
    }
    initializeRoutes(){
        this.router.post('/',this.controller.create);
        this.router.get('/',this.controller.findAll);
        this.router.get('/:id',this.controller.findOne);
        this.router.delete('/:id',this.controller.delete);
    }
}

export default new movieRoutes().router;