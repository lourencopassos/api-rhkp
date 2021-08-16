import mongoose, { Schema } from 'mongoose';

const AutoIncrement = require('mongoose-sequence')(mongoose);

export const QuantitativeEvaluationSchema = new Schema(
  {
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
    id: {
      type: Number
    },
    company_id: {
      type: Number,
      required: 'Belongs to required'
    }
  },
  { _id: false }
);

QuantitativeEvaluationSchema.plugin(AutoIncrement, {
  id: 'quantitative_id',
  inc_field: '_id'
});

export const QuantitativeEvaluationModel = mongoose.model(
  'QuantitativeEvaluation',
  QuantitativeEvaluationSchema,
  'quantitative evaluation'
);

export interface QuantitativeEvaluationInputDTO {
  evaluator_id: string;
  evaluee_id: string;
  self_ratings: Array<Rating>;
  manager_ratings: Array<Rating>;
  company_id: number;
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
  company_id?: number;
  updated_at: number;
}
