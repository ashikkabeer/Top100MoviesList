import { Router } from "express";
import UserController from "../controllers/user.controller";

class UserRoutes {
    router = Router()
    controller = new UserController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes(){
        this.router.post('/',this.controller.create);
        this.router.get('/',this.controller.findAll);
        this.router.get('/:id',this.controller.findOne);
        this.router.put('/:id',this.controller.update);
        this.router.delete('/:id',this.controller.delete);
    }
}

export default new UserRoutes().router;