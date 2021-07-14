import mongoose, { Schema } from 'mongoose';

const AutoIncrement = require('mongoose-sequence')(mongoose);

export const QuantitativeEvaluationSchema = new Schema({
  manager_ratings: {
    type: [{ criterion: String, rating: Number, id: Number }],
    required: 'Ratings required'
  },
  evaluator_id: {
    type: Number,
    required: 'Evaluator Id required'
  },
  evaluee_id: {
    type: Number,
    required: 'Evaluee Id required'
  },
  created_at: {
    type: Date,
    default: Date.now,
    required: 'Created At required'
  },
  updated_at: {
    type: Date
  },
  self_ratings: {
    type: [{ criterion: String, rating: Number, id: Number }],
    required: 'Ratings required'
  },
  _id: {
    type: Number
  },
  belongs_to: {
    type: Number,
    required: 'Belongs to required'
  }
});

QuantitativeEvaluationSchema.plugin(AutoIncrement);

export const QuantitativeEvaluationModel = mongoose.model(
  'QuantitativeEvaluation',
  QuantitativeEvaluationSchema
);

export interface QuantitativeEvaluationInputDTO {
  evaluator_id: string;
  evaluee_id: string;
  self_ratings: Array<Rating>;
  manager_ratings: Array<Rating>;
  belongs_to: number;
}

export interface Rating {
  criterion: string;
  rating: number;
  id: number;
}

export interface QuantitativeEvaluationEditDTO {
  evaluator_id?: string;
  evaluee_id?: string;
  self_ratings?: Array<Rating>;
  manager_ratings?: Array<Rating>;
  belongs_to?: number;
  updated_at: string;
}
