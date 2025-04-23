const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendance.controller");
const attendanceValidation = require("../validations/attendanceValidation");

router.post(
  "/createAttendance/:studentId/:lectureId",
  [attendanceValidation.validateCreated()],
  validateRequest,
  attendanceController.createAttendance
);

router.delete(
  "/deleteAttendance/:studentId/:lectureId",
  [attendanceValidation.validateDelete()],
  validateRequest,
  attendanceController.deleteAttendance
);

router.get(
  "/getAttendancesByLecture/:lectureId",
  [attendanceValidation.validategetAttendancesByLecture()],
  validateRequest,
  attendanceController.getAttendancesByLecture
);

router.get(
  "/getAttendancesByStudent/:studentId",
  [attendanceValidation.validategetAttendancesByStudent()],
  validateRequest,
  attendanceController.getAttendancesByStudent
);

router.get("/getAllAttendances", attendanceController.getAllAttendance);

module.exports =  {
  attendance:router}
