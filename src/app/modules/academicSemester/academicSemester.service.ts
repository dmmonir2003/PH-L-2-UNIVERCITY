import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterModel } from './academicSemester.model';

const createAcademicSemesterInDB = async (payLoad: TAcademicSemester) => {
  const result = await AcademicSemesterModel.create(payLoad);
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterInDB,
};
