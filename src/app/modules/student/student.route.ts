import express from 'express';
import { studentContolar } from './student.contolar';

const router = express.Router();

router.get('/', studentContolar.getAllStudentsInContolar);
router.get('/:studentId', studentContolar.getOneStudentInContolar);
router.delete('/:studentId', studentContolar.deletedStudentInContolar);

export const StudentRoute = router;
