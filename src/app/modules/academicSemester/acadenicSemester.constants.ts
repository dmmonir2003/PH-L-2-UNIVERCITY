import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TAcademicSemesterNameCodeMapper,
  TMonths,
} from './academicSemester.interface';

export const AcademicSemesterName: TAcademicSemesterName[] = [
  'autumn',
  'summer',
  'fall',
];
export const AcademicSemesterCode: TAcademicSemesterCode[] = ['01', '02', '03'];

export const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const AcademicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
  autumn: '01',
  summer: '02',
  fall: '03',
};
