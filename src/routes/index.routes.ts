import { Application } from "express";
import UserRoutes from './user.routes'
import MovieRoutes from './movie.routes'

export default class Routes {
    constructor(app: Application) {
        app.use("/api/users",UserRoutes)
        app.use("/api/movies/",MovieRoutes)
    }
}