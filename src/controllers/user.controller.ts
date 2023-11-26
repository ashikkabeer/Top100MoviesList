import { Request, Response } from 'express';
import User from '../models/user.model';
import userRepository from '../repositories/user.repository';

// Signup controller
export default class UserController {
    /*Create in the postgres*/
    async create(req: Request, res: Response) {
        try {
            const user: User = req.body;
            const savedUser = await userRepository.save(user);

            res.status(201).send(savedUser);
            // reqBody: req.body;
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error!',
            });
        }
    }

    async findAll(req: Request, res: Response) {
        const name = typeof req.query.name === 'string' ? req.query.name : '';

        try {
            const users = await userRepository.retrieveAll({ name });
            res.status(201).json({ message: 'create ok' });
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error!',
            });
        }
    }
    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const user = await userRepository.retrieveById(id);
            if (user) res.sendStatus(200).send(user);
        } catch (err) {
            res.status(500).json({
                message: 'Internal Server Error!',
            });
        }
    }

    async update(req: Request, res: Response) {
        let user: User = req.body;
        user.id = parseInt(req.params.id);

        try {
            const num = await userRepository.update(user);

            if (num == 1) res.send({ message: 'User Updated Successfully' });
            else
                res.send({
                    message: `Cannot update Tutorial with id=${user.id}. Maybe Tutorial was not found or req.body is empty!`,
                });
        } catch (error) {
            res.status(500).send({
                message: `Error updating Tutorial with id=${user.id}.`,
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

    try {
      const num = await userRepository.delete(id);

      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        });
      }
    } catch (err) {
      res.status(500).send({
        message: `Could not delete User with id==${id}.`
      });
    }
    }

    async deleteAll(req: Request, res: Response) {}
}
