const { body, param } = require("express-validator");

const lectureValidation = {
  validateCreateLecture() {
    return [
      body("courseCode").not().isEmpty(),
      body("courseName").not().isEmpty(),
      body("teacherId").not().isEmpty().isMongoId(),
      body("department").not().isEmpty(),
    ];
  },

  validateAttendLecture() {
    return [
      body("studentId").not().isEmpty().isMongoId(),
      body("lectureId").not().isEmpty().isMongoId(),
      body("name").not().isEmpty(),
      body("surname").not().isEmpty(),
      body("date").not().isEmpty().isISO8601(),
    ];
  },

  validateDeleteLecture() {
    return [
      param("lectureId").not().isEmpty().isMongoId(),
    ];
  },

  validateGetLecturesByTeacher() {
    return [
      param("teacherId").not().isEmpty().isMongoId(),
    ];
  },

  validateGetAllLectures() {
    return [];
  },
};

module.exports = lectureValidation;
