const Lecture = require("../models/lecture.model");
const Student = require("../models/student.model");
const Attendance = require("../models/attendance.model");

exports.createAttendance = async (req) => {
  try {
    const { studentId } = req.params;
    const { lectureId, attendanceMethod } = req.body;

    const existStudent = await Student.findById(studentId);
    if (!existStudent) {
      throw new Error("Öğrenci bulunamadı");
    }

    const existLecture = await Lecture.findById(lectureId);
    if (!existLecture) {
      throw new Error("Ders bulunamadı");
    }

    const newAttendance = new Attendance({
      studentId,
      lectureId,
      attendanceMethod,
      joinTime: new Date(),
    });

    await newAttendance.save();
    return newAttendance;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteAttendance = async (req) => {
  try {
    const { studentId, lectureId } = req.params;

    const attendanceToDelete = await Attendance.findOne({
      studentId,
      lectureId,
    });
    if (!attendanceToDelete) {
      throw new Error("Katılım kaydı bulunamadı");
    }

    await Attendance.findOneAndDelete({ studentId, lectureId });
    return "Katılım kaydı başarıyla silindi";
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAttendancesByLecture = async (req) => {
  try {
    const { lectureId } = req.params;

    const existLecture = await Lecture.findById(lectureId);
    if (!existLecture) {
      throw new Error("Ders bulunamadı");
    }

    const attendances = await Attendance.find({ lectureId });
    return attendances;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAttendancesByStudent = async (req) => {
  try {
    const { studentId } = req.params;

    const existStudent = await Student.findById(studentId);
    if (!existStudent) {
      throw new Error("Öğrenci bulunamadı");
    }

    const attendances = await Attendance.find({ studentId });
    return attendances;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllAttendance = async () => {
  try {
    const attendances = await Attendance.find();
    return attendances;
  } catch (error) {
    throw new Error(error);
  }
};
