// 1. Create an interface representing a document in MongoDB.

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
  name: UserName;
  email: string;
  contuctNumber: number;
  dathOfBarth: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  address: string;
  gerdian: Gerdian;
  gender: 'male' | 'famale';
  isActive: 'active' | 'blocked';
};
