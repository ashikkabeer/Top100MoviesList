import { Application } from "express";
import UserRoutes from '../routes/user'
import userRepository from "../repositories/user.repository";

export default class Routes {
    constructor(app: Application) {
        app.use("/api/users",UserRoutes)
    }
}