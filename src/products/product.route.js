import express from 'express';
import productsController from './product.controller';
import { isAuth, isAdmin, isSeller } from '../common/utils';
import validateId from '../common/validators/validateId';
import { validate } from '../common/middlewares/validateRequest';
import { createProductBody } from './product.validator';

const router = express.Router();

router.get('/', productsController.getProductsByCategory);

router.get('/seller', isAuth, isSeller, productsController.getProductsBySeller);

router.get('/:id', validate(validateId, 'params'), productsController.getProductId);

router.post('/:id/reviews', validate(validateId, 'params'), isAuth, productsController.addReviewForProduct);

router.put('/:id', validate(createProductBody, 'body'), validate(validateId, 'params'), isAuth, isAdmin, productsController.updateProduct);

router.delete('/:id', validate(validateId, 'params'), isAuth, isAdmin, productsController.deleteProduct);

router.post('/', validate(createProductBody, 'body'), isAuth, isAdmin, productsController.createProduct);

export default router;
