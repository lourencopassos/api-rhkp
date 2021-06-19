import mongoose, { Schema } from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

export const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: 'Name required'
  },
  email: {
    type: String,
    unique: true
  },
  company_id: {
    type: ObjectId,
    required: 'Company Id required'
  },
  password: {
    type: String,
    required: 'Password required'
  },
  phone: {
    type: Number,
    required: 'Number required',
    unique: true
  },
  last_online_at: {
    type: String
  },
  cpf: {
    type: String,
    required: 'CPF required',
    unique: true
  },
  photo: {
    type: String
  }
});

export const EmployeeModel = mongoose.model('Employee', EmployeeSchema);

export interface EmployeeInputDTO {
  name: string;
  email?: string;
  company_id: string;
  password: string;
  phone: number;
  cpf: string;
  photo?: string;
}

export interface EmployeeEditDTO {
  name?: string;
  email?: string;
  password?: string;
  phone?: number;
  photo?: string;
}
