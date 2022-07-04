const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const createOrderBody = Joi.object({
  name: Joi.string(),
  image: Joi.string(),
  author: Joi.string(),
  price: Joi.number(),
  reviews: Joi.array(),
  seller: Joi.objectId(),
  category: Joi.objectId(),
  payment: Joi.object({
    paymentMethod: Joi.string().required(),
  }).required()
    .messages({
      'any.required': 'Поле Спосіб оплати обовязкове для заповнення',
    }),
  countInStock: Joi.number(),
  description: Joi.string(),
});

module.exports = {
  createOrderBody,
};
