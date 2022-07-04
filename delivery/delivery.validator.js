const Joi = require('joi');

const validateCitiesQuery = Joi.object({
  city: Joi.string()
    .default('')
    .max(60)
    .required()
    .messages({
      'string.base': 'Поле Місто повинне бути стрічкового типу',
      'string.empty': 'Поле Місто обовязкове для заповнення',
      'string.max': 'Довжина поля Місто не більше 60 символів',
      'any.required': 'Поле Місто обовязкове для заповнення',
    }),
});

const validateStreetsQuery = Joi.object({
  city: Joi.string()
    .length(36)
    .required()
    .messages({
      'string.base': 'Поле Місто повинне бути стрічкового типу',
      'string.empty': 'Поле Місто обовязкове для заповнення',
      'any.required': 'Поле Місто обовязкове для заповнення',
    }),
  street: Joi.string()
    .default('')
    .max(60)
    .required()
    .messages({
      'string.base': 'Поле Вулиця повинне бути стрічкового типу',
      'string.empty': 'Поле Вулиця обовязкове для заповнення',
      'string.max': 'Довжина поля Вулиця не більше 60 символів',
      'any.required': 'Поле Вулиця обовязкове для заповнення',
    }),
});

const validateDeliveryPriceQuery = Joi.object({
  cityRecipient: Joi.string()
    .length(36)
    .required()
    .messages({
      'string.base': 'Поле Місто повинне бути стрічкового типу',
      'string.empty': 'Поле Місто обовязкове для заповнення',
      'any.required': 'Поле Місто обовязкове для заповнення',
    }),
  weight: Joi.number()
    .max(100000)
    .required()
    .messages({
      'string.base': 'Поле Маса повинне бути числом',
      'string.empty': 'Поле Маса обовязкове для заповнення',
      'any.required': 'Поле Маса обовязкове для заповнення',
    }),
  serviceType: Joi.string()
    .required()
    .messages({
      'string.base': 'Поле Спосіб доставки повинне бути стрічкового типу',
      'string.empty': 'Поле Спосіб доставки обовязкове для заповнення',
      'any.required': 'Поле Спосіб доставки обовязкове для заповнення',
    }),
  cost: Joi.number()
    .max(100000)
    .required()
    .messages({
      'string.base': 'Поле Ціна повинне бути числом',
      'string.empty': 'Поле Ціна обовязкове для заповнення',
      'any.required': 'Поле Ціна обовязкове для заповнення',
    }),
});

module.exports = {
  validateCitiesQuery,
  validateStreetsQuery,
  validateDeliveryPriceQuery,
};
