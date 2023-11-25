import { Request, Response } from 'express';
import User from '../models/userModel';
import userRepository from '../repositories/user.repository';

// Signup controller
export default class UserController {
  /*Create in the postgres*/
    async create(req: Request, res: Response) {
        try {
            res.status(201).json({ message: 'create ok' });
            reqBody: req.body;
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error!',
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            res.status(201).json({ message: 'create ok' });
            reqBody: req.body;
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error!',
            });
}
    }
    async findOne(req: Request, res: Response) {
        try {
            res.status(200).json({
                message: 'findOne OK',
                reqParamId: req.params.id,
            });
        } catch (err) {
            res.status(500).json({
                message: 'Internal Server Error!',
            });
        }
    }

    async update(req: Request, res: Response) {

    }

    async delete(req: Request, res: Response) {

    }

    async deleteAll(req: Request, res: Response) {

    }
}
