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

export const academicSemesterRoute = router;
