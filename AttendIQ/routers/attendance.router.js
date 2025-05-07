const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendance.controller");
const attendanceValidation = require("../validations/attendance.validation");

router.post(
  "/createAttendance/:studentId/:lectureId",
  [attendanceValidation.validateCreated()],

  attendanceController.createAttendance
);

router.delete(
  "/deleteAttendance/:studentId/:lectureId",
  [attendanceValidation.validateDelete()],

  attendanceController.deleteAttendance
);

router.get(
  "/getAttendancesByLecture/:lectureId",
  [attendanceValidation.validategetAttendancesByLecture()],

  attendanceController.getAttendancesByLecture
);

router.get(
  "/getAttendancesByStudent/:studentId",
  [attendanceValidation.validategetAttendancesByStudent()],

  attendanceController.getAttendancesByStudent
);

router.get("/getAllAttendances", attendanceController.getAllAttendance);

module.exports = {
  attendance: router,
};
