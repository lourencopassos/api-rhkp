import mongoose, { Schema } from 'mongoose';

const AutoIncrement = require('mongoose-sequence')(mongoose);

export const QualitativeEvaluationSchema = new Schema({
  title: {
    type: String,
    required: 'Title required'
  },
  description: {
    type: String,
    required: 'description required'
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
    required: 'Date required'
  },
  updated_at: {
    type: Date
  },
  company_id: {
    type: Number,
    required: 'Belongs to required'
  }
});

QualitativeEvaluationSchema.plugin(AutoIncrement);

export const QualitativeEvaluationModel = mongoose.model(
  'QualitativeEvaluation',
  QualitativeEvaluationSchema
);

export interface QualitativeEvaluationInputDTO {
  title: string;
  description: string;
  evaluator_id: string;
  evaluee_id: string;
  company_id: number;
}

export interface QualitativeEvaluationEditDTO {
  title?: string;
  description?: string;
  evaluator_id?: string;
  evaluee_id?: string;
  updated_at: number;
  company_id?: number;
}
