const { body, param } = require("express-validator");

const attendanceValidation = {
  validateCreated() {
    return [
      body("lectureId").not().isEmpty().isMongoId(),
      body("attendanceMethod").not().isEmpty(),
      param("studentId").not().isEmpty().isMongoId(),
    ];
  },

  validateDelete() {
    return [
      param("studentId").not().isEmpty().isMongoId(),
      param("lectureId").not().isEmpty().isMongoId(),
    ];
  },

  validategetAttendancesByLecture() {
    return [param("lectureId").not().isEmpty().isMongoId()];
  },

  validategetAttendancesByStudent() {
    return [param("studentId").not().isEmpty().isMongoId()];
  },
};

module.exports = attendanceValidation;
