const attendance = require("./attendance.router").attendance;
const lecture = require("./lecture.router").lecture;
const student = require("./student.router").student;
const teacher = require("./teacher.router").teacher;

module.exports = {
  attendance,
  lecture,
  student,
  teacher,
};
