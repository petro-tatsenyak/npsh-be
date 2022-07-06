const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const createProductBody = Joi.object({
  name: Joi.string(),
  image: Joi.string(),
  author: Joi.string(),
  price: Joi.number(),
  reviews: Joi.array(),
  seller: Joi.objectId(),
  category: Joi.string(),
  countInStock: Joi.number(),
  description: Joi.string(),
});

module.exports = {
  createProductBody,
};
