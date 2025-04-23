const Student = require("../models/student.model");
const utils = require("../utils/index");


exports.createStudent = async (req) => {
  try {
    const {
      name,
      surname,
      student_number,
      password,
      department,
      school,
      qrCode, // hocaya sormayı unutma 
      faceImageUrl,
    } = req.body;

    const existStudent = await Student.findOne({ student_number });
    if (existStudent) {
      throw new Error("Bu öğrenci numarası zaten kullanımda");
    }

    const newStudent = new Student({
      name,
      surname,
      student_number,
      password: utils.helper.hashToPassword(password),
      department,
      school,
      qrCode,
      faceImageUrl,
    });

    await newStudent.save();
    return newStudent;
  } catch (error) {
    throw new Error(error);
  }
};


exports.updateStudent = async (req) => {
  try {
    const { name, surname } = req.body;
    const { studentId } = req.params;

    const studentToUpdate = await Student.findById(studentId);
    if (!studentToUpdate) {
      throw new Error("Öğrenci bulunamadı");
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      { name, surname },
      { new: true }
    );
    //await updatedStudent.save() ? 
    return updatedStudent;
  } catch (error) {
    throw new Error(error);
  }
};


exports.deleteStudent = async (req) => {
  try {
    const { studentId } = req.params;

    const studentToDelete = await Student.findById(studentId);
    if (!studentToDelete) {
      throw new Error("Öğrenci bulunamadı");
    }

    await Student.findByIdAndDelete(studentId);
    return "Öğrenci başarıyla silindi";
  } catch (error) {
    throw new Error(error);
  }
};


exports.getAllStudents = async () => {
  try {
    const studentList = await Student.find();
    return studentList;
  } catch (error) {
    throw new Error(error);
  }
};


exports.getStudentById = async (req) => {
  try {
    const { studentId } = req.params;

    const foundStudent = await Student.findById(studentId);
    if (!foundStudent) {
      throw new Error("Öğrenci bulunamadı");
    }

    return foundStudent;
  } catch (error) {
    throw new Error(error);
  }
};
