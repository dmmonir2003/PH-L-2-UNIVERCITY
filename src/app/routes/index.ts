import { Router } from 'express';
import { StudentRoute } from '../modules/student/student.route';
import { userRoutes } from '../modules/user/user.route';
import { academicSemesterRoute } from '../modules/academicSemester/academicSemester.route';

const router = Router();

const moudleRoute = [
  {
    path: '/students',
    route: StudentRoute,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRoute,
  },
];

moudleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
