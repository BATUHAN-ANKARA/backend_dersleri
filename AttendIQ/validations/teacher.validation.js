const { body, param } = require("express-validator");

const teacherValidation = {
  validateCreateTeacher() {
    return [
      body("name").not().isEmpty(),
      body("surname").not().isEmpty(),
      body("email").not().isEmpty().isEmail(),
      body("password").not().isEmpty().isLength({ min: 6 }), 
      body("school").not().isEmpty(),
      body("department").not().isEmpty(),
    ];
  },

  validateUpdateTeacher() {
    return [
      body("name").optional().not().isEmpty(),
      body("surname").optional().not().isEmpty(),
      param("teacherId").not().isEmpty().isMongoId(),
    ];
  },

  validateDeleteTeacher() {
    return [
      param("teacherId").not().isEmpty().isMongoId(),
    ];
  },

  validateGetAllTeachers() {
    return [];
  },

  validateGetTeacherById() {
    return [
      param("teacherId").not().isEmpty().isMongoId(),
    ];
  },
};

module.exports = teacherValidation;
