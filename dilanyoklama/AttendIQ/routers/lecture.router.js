const express = require("express");
const router = express.Router();
const lectureController = require("../controllers/lecture.controller");
const lectureValidation = require("../validations/lecture.validation");

router.post(
  "/createLecture", 
  [lectureValidation.validateCreateLecture()],
  lectureController.createLecture
);

router.post(
  "/attendLecture", 
  [lectureValidation.validateAttendLecture()],
  lectureController.attendLecture
);

router.delete(
  "/deleteLecture/:lectureId", 
  [lectureValidation.validateDeleteLecture()],
  lectureController.deleteLectures
);

router.get(
  "/getLecturesByTeacher/:teacherId", 
  [lectureValidation.validateGetLecturesByTeacher()],
  lectureController.getLecturesByTeacher
);

router.get("/getAllLectures", lectureController.getAllLectures);

module.exports = {
  lecture:router}
