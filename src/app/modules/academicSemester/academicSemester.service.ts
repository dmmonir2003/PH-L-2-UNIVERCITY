import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterModel } from './academicSemester.model';

const createAcademicSemesterInDB = async (payLoad: TAcademicSemester) => {
  type TAcademicSemesterNameCodeMapper = {
    [key: string]: string;
  };

  const AcademicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
    autumn: '01',
    summer: '02',
    fall: '03',
  };

  if (AcademicSemesterNameCodeMapper[payLoad.name] !== payLoad.code) {
    throw new Error('semester code is invalid');
  }

  const result = await AcademicSemesterModel.create(payLoad);
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterInDB,
};
