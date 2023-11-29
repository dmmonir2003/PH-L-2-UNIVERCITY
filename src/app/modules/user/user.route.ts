import { userContolar } from './user.contolar';

import { zodValidations } from '../student/student.zod.validation';
import validateRequest from '../../middleware/validateRequest';
import { Router } from 'express';

const router = Router();

// user application routes
router.post(
  '/create-student',
  validateRequest(zodValidations.createStudenZodValidationtSchema),
  userContolar.createStudentInContolar,
);

export const userRoutes = router;
