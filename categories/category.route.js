import express from 'express';
import categoriesController from './category.controller';
import {
  categoryBody,
} from './category.validator';
import { isAdmin, isAuth } from '../common/utils';
import { validate } from '../common/middlewares/validateRequest';
import validateId from '../common/validators/validateId';

const router = express.Router();

router.get('/', categoriesController.getCategories);

router.post('/', validate(categoryBody, 'body'), isAuth, isAdmin, categoriesController.createCategory);

router.patch('/:id', validate(validateId, 'params'), validate(categoryBody, 'body'), isAuth, isAdmin, categoriesController.updateCategory);

export default router;
