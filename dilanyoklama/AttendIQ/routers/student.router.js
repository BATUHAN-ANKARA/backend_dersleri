const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");
const studentValidation = require("../validations/studentValidation");


router.post(
  "/createStudent",
  [studentValidation.validateCreateStudent()],
  validateRequest,
  studentController.createStudent
);

router.put(
  "/updateStudent/:studentId",
  [studentValidation.validateUpdateStudent()],
  validateRequest,
  studentController.updateStudent
);

router.delete(
  "/deleteStudent/:studentId",
  [studentValidation.validateDeleteStudent()],
  validateRequest,
  studentController.deleteStudent
);

router.get(
  "/getAllStudents",
  studentController.getAllStudents
);

router.get(
  "/getStudentById/:studentId",
  [studentValidation.validateGetStudentById()],
  validateRequest,
  studentController.getStudentById
);

module.exports =  {
  student:router}
