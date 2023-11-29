import express from 'express';
import { academicSemesterContolar } from './academicSemester.contolar';
import validateRequest from '../../middleware/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidation.createAcademicSemesterValidation),
  academicSemesterContolar.createAcademicSemester,
);
// router.patch(
//   '/create-academic-semester',
//   validateRequest(academicSemesterValidation.createAcademicSemesterValidation),
//   academicSemesterContolar.createAcademicSemester,
// );
router.get('/', academicSemesterContolar.getAllSemester);
router.get('/:_id', academicSemesterContolar.getSingelSemester);

export const academicSemesterRoute = router;
