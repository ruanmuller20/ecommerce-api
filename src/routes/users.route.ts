import express from 'express';
import { UserController } from '../controllers/UserController';

export const userRoutes = express.Router();

userRoutes.get ('/users', UserController.getAll);
userRoutes.post('/users', UserController.save);
userRoutes.put('/users/:id', UserController.update);
userRoutes.delete('/users/:id', UserController.delete);


