const Teacher = require("../models/teacher.model");
const utils = require("../utils/index");

exports.createTeacher = async (req) => {
  try {
    const { name, surname, email, password, school, department } = req.body;

    const existTeacher = await Teacher.findOne({ email });
    if (existTeacher) {
      throw new Error("Bu e-mail kullanımda");
    }

    const newTeacher = new Teacher({
      name,
      surname,
      email,
      password: utils.helper.hashToPassword(password),
      school,
      department,
    });

    await newTeacher.save();
    return newTeacher;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateTeacher = async (req) => {
  try {
    const { name, surname } = req.body;
    const { teacherId } = req.params;

    const teacherToUpdate = await Teacher.findById(teacherId);
    if (!teacherToUpdate) {
      throw new Error("Öğretmen bulunamadı");
    }

    const updatedTeacher = await Teacher.findByIdAndUpdate(
      teacherId,
      { name, surname },
      { new: true }
    );

    return updatedTeacher;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteTeacher = async (req) => {
  try {
    const { teacherId } = req.params;

    const teacherToDelete = await Teacher.findById(teacherId);
    if (!teacherToDelete) {
      throw new Error("Öğretmen bulunamadı");
    }

    await Teacher.findByIdAndDelete(teacherId);
    return "Öğretmen başarıyla silindi";
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllTeachers = async () => {
  try {
    const teacherList = await Teacher.find();
    return teacherList;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getTeacherById = async (req) => {
  try {
    const { teacherId } = req.params;

    const foundTeacher = await Teacher.findById(teacherId);
    if (!foundTeacher) {
      throw new Error("Öğretmen bulunamadı");
    }

    return foundTeacher;
  } catch (error) {
    throw new Error(error);
  }
};
