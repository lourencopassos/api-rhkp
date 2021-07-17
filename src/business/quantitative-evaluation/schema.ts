import Joi from 'joi'

const ratings = Joi.object().keys({
  criterion: Joi.string().min(3).max(30).required(),
  rating: Joi.number().min(1).max(5).required()
})

export const schema = Joi.object().keys({
  manager_ratings: Joi.array().items(ratings).required(),
  evaluator_id: Joi.number().required(),
  evaluee_id: Joi.number().required(),
  self_ratings: Joi.array().items(ratings).required(),
  belongs_to: Joi.number().required()
});
