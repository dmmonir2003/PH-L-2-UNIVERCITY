import { Schema, model } from 'mongoose';
import { Address, Student, UserName } from './student.interface';
import validator from 'validator';

// 2. Create a Schema corresponding to the document interface.

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'castom error first name dita hoba'],

    validate: {
      // custom validator
      validator: function (value: string) {
        const firstNameValueStr =
          value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameValueStr === value;
      },
      message: '{VALUE} is not valid',
    },
  },
  middleName: { type: String },
  lastName: {
    type: String,
    required: true,
    validate: {
      // pakege validator
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid',
    },
  },
});

const addressSchema = new Schema<Address>({
  city: { type: String },
  country: { type: String },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'castom error user id  dita hoba'],
   
    ref: 'User', // refer kor la calection ar nam dita hoba
  },
  name: { type: userNameSchema, required: true },
  email: { type: String, required: true, unique: true },
  contuctNumber: {
    type: Number,
    required: true,
    max: 10, //buildin validator
  },
  gerdian: {
    fatherName: { type: String },
    motherName: { type: String },
    contuct: { type: String },
  },
  dathOfBarth: { type: String },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'famale'],
      message: "gender hoba 'male' or 'female'",
    },
    required: true,
  },
  address: { type: addressSchema, required: true },
});

// ------{doc middlleware }-----------

// pre hook /middlleware in mongosse use password set in database;

// ------{query  middlleware }-----------

studentSchema.pre('find', async function (next) {
  next();
});

// 3. Create a Model.
export const StudentModel = model<Student>('Student', studentSchema);
