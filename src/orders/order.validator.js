const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const createOrderBody = Joi.object({
  orderItems: Joi.array()
      .required()
      .messages({
        'any.required': 'Обовязково обрати хоча б один продукт',
      }),
  shipping: Joi.object({
    street: Joi.string().allow(null, ''),
    city: Joi.string().allow(null, ''),
    cityRef: Joi.string().allow(null, ''),
    postalCode: Joi.string().allow(null, ''),
    country: Joi.string().allow(null, ''),
    warehouse: Joi.string().allow(null, ''),
    deliveryType: Joi.string().required(),
  }),
  payment: Joi.object({
    paymentMethod: Joi.string().required(),
  }).required()
      .messages({
        'any.required': 'Поле Спосіб оплати обовязкове для заповнення',
      }),
  itemsPrice: Joi.number().required(),
  shippingPrice: Joi.number(),
  totalPrice: Joi.number().required(),
  isPaid: Joi.boolean(),
  paidAt: Joi.date(),
  payment_id: Joi.string(),
  isDelivered: Joi.boolean(),
  deliveredAt: Joi.date(),
});

module.exports = {
  createOrderBody,
};
