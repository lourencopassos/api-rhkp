import validator from 'cpf-cnpj-validator';

const Joi = require('@hapi/joi').extend(validator);

export const schema = Joi.object().keys({
  name: Joi.string().min(3).max(30).required(),
  company_id: Joi.number().required()
});
