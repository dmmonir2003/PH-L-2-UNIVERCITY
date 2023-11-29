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

const gelAllSemesterInDB = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};
const getSingelSemesterInDB = async (id: string) => {
  const result = await AcademicSemesterModel.findById(id);
  return result;
};

const updateSemesterInDB = async () => {
  // const result =await AcademicSemesterModel.findOneAndUpdate({_id})
};

export const academicSemesterServices = {
  createAcademicSemesterInDB,
  gelAllSemesterInDB,
  getSingelSemesterInDB,
  updateSemesterInDB,
};
