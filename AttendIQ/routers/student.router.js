const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");
const studentValidation = require("../validations/student.validation");


router.post(
  "/createStudent",
  [studentValidation.validateCreateStudent()],
  
  studentController.createStudent
);

router.put(
  "/updateStudent/:studentId",
  [studentValidation.validateUpdateStudent()],
  
  studentController.updateStudent
);

router.delete(
  "/deleteStudent/:studentId",
  [studentValidation.validateDeleteStudent()],
  
  studentController.deleteStudent
);

router.get(
  "/getAllStudents",
  studentController.getAllStudents
);

router.get(
  "/getStudentById/:studentId",
  [studentValidation.validateGetStudentById()],
  
  studentController.getStudentById
);

module.exports =  {
  student:router}
