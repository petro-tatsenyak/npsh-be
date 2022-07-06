import express from 'express';
import usersController from './user.controller';
import { isAuth } from '../common/utils';

const router = express.Router();

router.put('/:id', isAuth, usersController.updateUser);

router.post('/signin',usersController.loginUser);

router.post('/register', usersController.registerUser);

export default router;
