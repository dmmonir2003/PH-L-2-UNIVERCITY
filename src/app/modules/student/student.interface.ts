// 1. Create an interface representing a document in MongoDB.

import { Types } from 'mongoose';

export type Gerdian = {
  fatherName: string;
  motherName: string;
  contuct: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Address = {
  city: string;
  country: string;
};

export type Student = {
  user: Types.ObjectId;
  id: string;
  name: UserName;
  email: string;
  contuctNumber: number;
  dathOfBarth: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  address: Address;
  gerdian?: Gerdian;
  gender: 'male' | 'female';
  isActive: 'active' | 'blocked';
  isDeleted: boolean;
};
