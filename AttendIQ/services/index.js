const lectureService = require("./lecture.service");
const studentService = require("./student.service");
const attendanceService = require("./attendance.service");
const teacherService = require("./teacher.service");

module.exports = {
  lecture: lectureService,
  student: studentService,
  attendance: attendanceService,
  teacher: teacherService,
};
