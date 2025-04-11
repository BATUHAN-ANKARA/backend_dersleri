const Student = require("../models/student.model");
const utils = require("../utils/index");

exports.createStudent = async (req, res) => {
  try {
    const { name, surname, password, student_number, school, department } =
      req.body;
    const existStudent = await Student.findOne({
      student_number: student_number,
    });
    if (existStudent) {
      throw new Error("Bu öğrenci numarası zaten kullanımda");
    }
    const _password = utils.helper.hashToPassword(password);
    const student = new Student({
      name,
      surname,
      password: _password,
      student_number,
      school,
      department,
    });
    await student.save();
    return student;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateStudent = async (req) => {
  try {
    const { name, surname } = req.body;
    const { studentId } = req.params;
    const existStudent = await Student.findById(studentId);
    if (!existStudent) {
      throw new Error("Öğrenci bulunamadı");
    }
    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      { name: name, surname: surname },
      { new: true }
    );
    return updatedStudent;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllStudents = async () => {
  try {
    const students = await Student.find();
    return students;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getStudentById = async (req) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    return student;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteStudent = async (req) => {
  try {
    const { studentId } = req.params;
    const existStudent = await Student.findById(studentId);
    if (!existStudent) {
      throw new Error("Öğrenci bulunamadı");
    }
    await Student.findByIdAndDelete(studentId);
    return "Öğrenci silindi";
  } catch (error) {
    throw new Error(error);
  }
};
