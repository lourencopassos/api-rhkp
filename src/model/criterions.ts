import mongoose, { Schema } from 'mongoose';

const AutoIncrement = require('mongoose-sequence')(mongoose);

export const CriterionsSchema = new Schema(
  {
    name: {
      type: String,
      required: 'Criterion name required'
    },
    company_id: {
      type: Number,
      required: 'Belongs to required'
    },
    _id: {
      type: Number
    }
  },
  { _id: false }
);

CriterionsSchema.plugin(AutoIncrement);

export const CriterionModel = mongoose.model('Criterion', CriterionsSchema, 'criterion');

export interface CriterionInputDTO {
  name: string;
  company_id: number;
}

export interface CriterionEditDTO {
  name?: string;
  company_id?: number;
}