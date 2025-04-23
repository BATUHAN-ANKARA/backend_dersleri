const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacher.controller");
const teacherValidation = require("../validations/teacherValidation");


router.post(
  "/createTeacher",
  [teacherValidation.validateCreateTeacher()],
  validateRequest,
  teacherController.createTeacher
);

router.put(
  "/updateTeacher/:teacherId",
  [teacherValidation.validateUpdateTeacher()],
  validateRequest,
  teacherController.updateTeacher
);

router.delete(
  "/deleteTeacher/:teacherId",
  [teacherValidation.validateDeleteTeacher()],
  validateRequest,
  teacherController.deleteTeacher
);

router.get(
  "/getAllTeachers",
  teacherController.getAllTeachers
);

router.get(
  "/getTeacherById/:teacherId",
  [teacherValidation.validateGetTeacherById()],
  validateRequest,
  teacherController.getTeacherById
);

module.exports =  {
  teacher:router}
