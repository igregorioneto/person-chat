import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import  UserRepository  from '../repositories/user-repository';

class UserController {
    public async getUsers(req: Request, res: Response): Promise<Response> {
        const users = await UserRepository.getUsers();
        return res.status(200).json(users);
    }

    public async createUser(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        const user = await UserRepository.getUserEmail(email);
        if (user) {
            return res.status(404).json({
                message: 'User already exists!'
            });
        }

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = await UserRepository.createUser({
            name,
            email,
            password: passwordHash
        });

        return res.status(201).json(newUser);
    }
}

export default new UserController();