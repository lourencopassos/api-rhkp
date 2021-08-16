import mongoose, { Schema } from 'mongoose';
import { Role } from '../types/namespaces';

const AutoIncrement = require('mongoose-sequence')(mongoose);

export const ManagerSchema = new Schema(
  {
    id: {
      type: Number
    },
    name: {
      type: String,
      required: 'Name required'
    },
    email: {
      type: String,
      required: 'Email required',
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
      type: String,
      required: 'Cellphone number required',
      unique: true
    },
    last_online_at: {
      type: String
    },
    photo: {
      type: String
    },
    role: {
      type: Number,
      default: Role.MANAGER
    }
  },
  { _id: false }
);

ManagerSchema.plugin(AutoIncrement, { id: 'manager_id', inc_field: '_id' });

export const ManagerModel = mongoose.model('Manager', ManagerSchema, 'manager');

export interface ManagerInputDTO {
  name: string;
  email: string;
  company_id: number;
  password: string;
  phone: string;
  photo?: string;
  role: number;
}

export interface ManagerEditDTO {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  photo?: string;
}

export interface ManagerLoginInput {
  email: string;
  password: string;
}