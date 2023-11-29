import { StudentModel } from './student.scema';

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getOneStudentFromDB = async (_id: string) => {
  const result = await StudentModel.findOne({ _id });
  return result;
};
const deletedStudentFromDB = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentService = {
  getAllStudentsFromDB,
  getOneStudentFromDB,
  deletedStudentFromDB,
};
