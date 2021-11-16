import { Request, Response } from 'express';
import  UserRepository  from '../repositories/user-repository';

class UserController {
    public async createUser(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;
        const user = await UserRepository.createUser({
            name,
            email,
            password
        });
        return res.status(201).json(user);
    }
}

export default new UserController();