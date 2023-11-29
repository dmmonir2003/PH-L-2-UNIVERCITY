import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterModel } from './academicSemester.model';
import { AcademicSemesterNameCodeMapper } from './acadenicSemester.constants';

const createAcademicSemesterInDB = async (payLoad: TAcademicSemester) => {
  if (AcademicSemesterNameCodeMapper[payLoad.name] !== payLoad.code) {
    throw new Error('semester code is invalid');
  }

  const result = await AcademicSemesterModel.create(payLoad);
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterInDB,
};
