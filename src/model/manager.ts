import mongoose, { Schema } from 'mongoose';

export const ManagerSchema = new Schema({
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
  }
});

export const ManagerModel = mongoose.model('Manager', ManagerSchema);

export interface ManagerInputDTO {
  name: string;
  email: string;
  company_id: number;
  password: string;
  phone: string;
  photo?: string;
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