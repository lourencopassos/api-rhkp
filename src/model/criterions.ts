import mongoose, { Schema } from 'mongoose';

const AutoIncrement = require('mongoose-sequence')(mongoose);

export const CriterionsSchema = new Schema({
  name: {
    type: String,
    required: 'Criterion name required'
  },
  belongs_to: {
    type: Number,
    required: 'Belongs to required'
  },
  _id: {
    type: Number
  }
});

CriterionsSchema.plugin(AutoIncrement);

export const CriterionModel = mongoose.model('Criterion', CriterionsSchema);

export interface CriterionInputDTO {
  name: string;
  belongs_to: string;
}

export interface CriterionEditDTO {
  name?: string;
  belongs_to?: string;
}