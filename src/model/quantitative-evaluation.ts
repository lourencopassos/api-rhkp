import mongoose, { Schema } from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

export const QuantitativeEvaluationSchema = new Schema({
  manager_ratings: {
    type: [{ criterion: String, rating: Number, id: Number }],
    required: 'Ratings required'
  },
  evaluator_id: {
    type: ObjectId,
    required: 'Evaluator Id required'
  },
  evaluee_id: {
    type: ObjectId,
    required: 'Evaluee Id required'
  },
  date: {
    type: Date,
    default: Date.now,
    required: 'Date required'
  },
  self_ratings: {
    type: [{ criterion: String, rating: Number, id: Number }],
    required: 'Ratings required'
  }
});

export const QuantitativeEvaluationModel = mongoose.model(
  'QuantitativeEvaluation',
  QuantitativeEvaluationSchema
);

export interface QuantitativeEvaluationInputDTO {
  evaluator_id: string;
  evaluee_id: string;
  self_ratings: Array<Rating>;
  manager_ratings: Array<Rating>;
}

export interface Rating {
  criterion: string;
  rating: number
}