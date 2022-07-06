const Joi = require('joi');

const categoryBody = Joi.object({
  name: Joi.string()
    .default('')
    .min(2)
    .max(60)
    .required()
    .messages({
      'string.base': 'Поле Назва поввине бути стрічкового типу',
      'string.empty': 'Поле Назва обовязкове для заповнення',
      'string.min': 'Довжина поля Назва не менше 2 символів',
      'string.max': 'Довжина поля Назва не більше 60 символів',
      'any.required': 'Поле Назва обовязкове для заповнення',
    }),

  description: Joi.string()
    .min(1)
    .max(300)
    .truncate()
    .required()
    .messages({
      'string.base': 'Поле Опис поввине бути стрічкового типу',
      'string.empty': 'Поле Опис обовязкове для заповнення',
      'string.min': 'Довжина Опис Назва не менше 1 символу',
      'string.max': 'Довжина Опис Назва не більше 300 символів',
      'any.required': 'Поле Опис обовязкове для заповнення',
    }),

  image: Joi.string()
    .messages({
      'any.required': 'Обране фото невалідне',
    }),

});

module.exports = {
  categoryBody,
};
