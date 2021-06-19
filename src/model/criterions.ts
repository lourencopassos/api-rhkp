import mongoose, { Schema } from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

export const CriterionsSchema = new Schema({
  name: {
    type: String,
    required: 'Criterion name required'
  },
  belongs_to: {
    type: ObjectId,
    required: 'Belongs to required'
  }
});

export const CriterionModel = mongoose.model('Criterion', CriterionsSchema);

export interface CriterionInputDTO {
  name: string;
  belongs_to: string;
}
