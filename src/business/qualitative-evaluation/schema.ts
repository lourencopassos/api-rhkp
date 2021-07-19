import Joi from 'joi';

export const schema = Joi.object().keys({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().min(3).max(30).required(),
  company_id: Joi.number().required(),
  evaluator_id: Joi.number().required(),
  evaluee_id: Joi.number().required()
});
