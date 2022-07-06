const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const schema = Joi.object({
  id: Joi.objectId().required(),
});

export default schema;
