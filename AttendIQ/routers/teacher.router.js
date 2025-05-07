const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacher.controller");
const teacherValidation = require("../validations/teacher.validation");


router.post(
  "/createTeacher",
  [teacherValidation.validateCreateTeacher()],
  
  teacherController.createTeacher
);

router.put(
  "/updateTeacher/:teacherId",
  [teacherValidation.validateUpdateTeacher()],
  
  teacherController.updateTeacher
);

router.delete(
  "/deleteTeacher/:teacherId",
  [teacherValidation.validateDeleteTeacher()],
  
  teacherController.deleteTeacher
);

router.get(
  "/getAllTeachers",
  teacherController.getAllTeachers
);

router.get(
  "/getTeacherById/:teacherId",
  [teacherValidation.validateGetTeacherById()],
 
  teacherController.getTeacherById
);

module.exports =  {
  teacher:router}
