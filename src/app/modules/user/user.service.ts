import config from '../../config';
import { Student } from '../student/student.interface';
import { StudentModel } from '../student/student.scema';
import { TUser } from './user.interface';

import { userModel } from './user.model';

const createStudentInToDB = async (password: string, student: Student) => {
  // create a user object and type difine TUser use Partial
  const user: Partial<TUser> = {};

  // if password is not geven by user set default password
  // option-1

  user.password = password || (config.default_password as string);
  // option -2

  console.log(user.password);
  // if (!password) {
  //   user.password = config.default_password as string;
  // } else {
  //   user.password = password;
  // }

  // set a student role
  user.role = 'student';
  //ganereted id manually

  user.id = '20301001';
  // create a user
  const newUser = await userModel.create(user);

  // create a student
  if (Object.keys(newUser).length) {
    // set id councect student.id , and  _id set as a user

    student.id = newUser.id;
    student.user = newUser._id; //this _id refer to user calection

    // create a student after create user
    const newStudent = await StudentModel.create(student);
    return newStudent;
  }
};

export const userServices = {
  createStudentInToDB,
};
