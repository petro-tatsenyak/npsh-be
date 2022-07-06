import express from 'express';
import deliveryController from './delivery.controller';
import { validateDeliveryPriceQuery, validateStreetsQuery, validateCitiesQuery } from './delivery.validator';
import { validate } from '../common/middlewares/validateRequest';

const router = express.Router();

router.get('/warehouses', validate(validateCitiesQuery, 'query'), deliveryController.getNovaPoshtaWarehouses);

router.get('/cities', validate(validateCitiesQuery, 'query'), deliveryController.getNovaPoshtaCities);

router.get('/streets', validate(validateStreetsQuery, 'query'), deliveryController.getNovaPoshtaStreets);

router.get('/price', validate(validateDeliveryPriceQuery, 'query'), deliveryController.getNovaPoshtaPrices);

export default router;
