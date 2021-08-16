import Joi from 'joi';

export const schema = Joi.object().keys({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(30).required(),
  company_id: Joi.number().positive().integer(),
  phone: Joi.string().required(),
  // phone: Joi.string().length(11).pattern(/^\d+$/).required(),
  photo: Joi.string().uri().min(6),
  role: Joi.number().equal(2)
});
