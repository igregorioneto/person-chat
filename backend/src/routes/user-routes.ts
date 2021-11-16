import { Router } from 'express';
import UserController from '../controllers/user-controller';

const routes = Router();

routes.post('/', UserController.createUser);

export default routes;