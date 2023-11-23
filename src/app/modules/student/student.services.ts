import { StudentModel } from '../student.scema';
import { Student } from './student.interface';

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getOneStudentFromDB = async (_id: string) => {
  const result = await StudentModel.findOne({ _id });
  return result;
};

const createStudentInToDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

export const studentService = {
  createStudentInToDB,
  getAllStudentsFromDB,
  getOneStudentFromDB,
};
