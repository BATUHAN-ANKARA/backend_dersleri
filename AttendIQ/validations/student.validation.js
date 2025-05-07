const { body, param } = require("express-validator");

const studentValidation = {
  validateCreateStudent() {
    return [
      body("name").not().isEmpty(),
      body("surname").not().isEmpty(),
      body("student_number").not().isEmpty().isLength({ min: 9, max: 9 }), 
      body("password").not().isEmpty().isLength({ min: 6 }), 
      body("department").not().isEmpty(),
      body("school").not().isEmpty(),
      body("qrCode").optional().isString(),
      body("faceImageUrl").optional().isString(),
    ];
  },

  validateUpdateStudent() {
    return [
      body("name").optional().not().isEmpty(),
      body("surname").optional().not().isEmpty(),
      param("studentId").not().isEmpty().isMongoId(),
    ];
  },

  validateDeleteStudent() {
    return [
      param("studentId").not().isEmpty().isMongoId(),
    ];
  },

  validateGetAllStudents() {
    return [];
  },

  validateGetStudentById() {
    return [
      param("studentId").not().isEmpty().isMongoId(),
    ];
  },
};

module.exports = studentValidation;
