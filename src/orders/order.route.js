import express from 'express';
import ordersController from './order.controller';
import paymentsController from '../payment/payment.controller';
import { isAuth, isAdmin } from '../common/utils';
import validateId from '../common/validators/validateId';
import { validate } from '../common/middlewares/validateRequest';
import { createOrderBody } from './order.validator';

const router = express.Router();

router.get('/', isAuth, ordersController.getOrders);

router.get('/mine', isAuth, ordersController.getOrdersByUser);

router.get('/:id', validate(validateId, 'params'), isAuth, ordersController.getOrderById);

router.delete('/:id', validate(validateId, 'params'), isAuth, isAdmin, ordersController.deleteOrder);

router.post('/', isAuth, validate(createOrderBody, 'body'), ordersController.createOrder);

router.post('/:id', validate(validateId, 'params'), paymentsController.updatePaymentStatus);

export default router;
