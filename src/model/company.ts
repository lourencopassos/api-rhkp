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
CompanySchema.plugin(AutoIncrement, { id: 'company_id', inc_field: '_id' });

export const CompanyModel = mongoose.model('Company', CompanySchema, 'company');

export interface CompanyInputDTO {
  name: string;
  logo: string;
}

export interface CompanyEditDTO {
  name?: string;
  logo?: string;
}

