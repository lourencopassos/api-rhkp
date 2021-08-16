import mongoose, { Schema } from 'mongoose';
import { Role } from '../types/namespaces';

const AutoIncrement = require('mongoose-sequence')(mongoose);

export const EmployeeSchema = new Schema(
  {
    _id: {
      type: Number
    },
    name: {
      type: String,
      required: 'Name required'
    },
    email: {
      type: String,
      unique: true
    },
    company_id: {
      type: Number,
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
    },
    role: {
      type: Number,
      default: Role.EMPLOYEE
    }
  },
  { _id: false }
);

EmployeeSchema.plugin(AutoIncrement, { id: 'id', inc_field: '_id' });

export const EmployeeModel = mongoose.model('Employee', EmployeeSchema, 'employee');

export interface EmployeeInputDTO {
  name: string;
  email?: string;
  company_id: number;
  password: string;
  phone: string;
  cpf: string;
  photo?: string;
  role: number;
}

export interface EmployeeEditDTO {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  photo?: string;
}

export interface EmployeeCpfLoginInput {
  cpf: string;
  password: string;
}

export interface EmployeePhoneLoginInput {
  phone: string;
  password: string;
}