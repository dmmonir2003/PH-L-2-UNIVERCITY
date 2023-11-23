import { Schema, model } from 'mongoose';
import { Address, Student, UserName } from './student/student.interface';

// 2. Create a Schema corresponding to the document interface.

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const addressSchema = new Schema<Address>({
  city: { type: String },
  country: { type: String },
});

const studentSchema = new Schema<Student>({
  name: userNameSchema,
  email: { type: String, required: true },
  contuctNumber: { type: Number, required: true },
  dathOfBarth: { type: String },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  gender: ['male', 'famale'],
  address: addressSchema,
  isActive: ['active', 'blocked'],
});

// 3. Create a Model.
export const StudentModel = model<Student>('Student', studentSchema);
