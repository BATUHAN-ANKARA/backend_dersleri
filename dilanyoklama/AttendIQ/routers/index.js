const attendance = require("./attendance.router");
const lecture = require("./lecture.router");
const student = require("./student.router");
const teacher = require("./teacher.router");

module.exports = {
  attendance,
  lecture,
  student,
  teacher,
};
