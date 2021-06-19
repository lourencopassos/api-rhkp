import mongoose, { Schema } from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

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
  }
});

export const QualitativeEvaluationModel = mongoose.model(
  'QualitativeEvaluation',
  QualitativeEvaluationSchema
);

export interface QualitativeEvaluationInputDTO {
  title: string;
  description: string;
  evaluator_id: string;
  evaluee_id: string;
}
