import httpStatus from 'http-status';
import catchAsync from '../../utilis/catchAsync';
import sendResponse from '../../utilis/sendResponse';
import { academicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.createAcademicSemesterInDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'academic Semester create  successfully !',
    data: result,
  });
});

const getAllSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.gelAllSemesterInDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'academic Semester create  successfully !',
    data: result,
  });
});
const getSingelSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;

  const result =
    await academicSemesterServices.getSingelSemesterInDB(semesterId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'academic fached successfully !',
    data: result,
  });
});
const updateSemester = catchAsync(async (req, res) => {
  // sendResponse(res, {
  //   statusCode: httpStatus.OK,
  //   success: true,
  //   message: 'academic Semester create  successfully !',
  //   data: result,
  // });
});

export const academicSemesterContolar = {
  createAcademicSemester,
  getAllSemester,
  getSingelSemester,
  updateSemester,
};
