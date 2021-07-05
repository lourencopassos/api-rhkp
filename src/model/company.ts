import mongoose, { Schema } from 'mongoose';

const AutoIncrement = require('mongoose-sequence')(mongoose);

export const CompanySchema = new Schema(
  {
    name: {
      type: String,
      required: 'Criterion name required'
    },
    logo: {
      type: String,
      required: 'Criterion name required'
    },
    _id: {
      type: Number,
    }
  },
  { _id: false }
);
CompanySchema.plugin(AutoIncrement);

export const CompanyModel = mongoose.model('Company', CompanySchema);

export interface CompanyInputDTO {
  name: string;
  logo: string;
}

export interface CompanyEditDTO {
  name?: string;
  logo?: string;
}

