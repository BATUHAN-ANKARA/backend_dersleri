const Teacher = require("../models/teacher.model");
const utils = require("../utils/index");

exports.createTeacher = async (req, res) => {
  try {
    const { name, surname, email, password, school, department } = req.body;
    const existTeacher = await Teacher.findOne({ email: email });
    if (existTeacher) {
      throw new Error("Böyle bir mail adresi zaten kullanımda");
    }
    const _password = utils.helper.hashToPassword(password);
    const teacher = new Teacher({
      name,
      surname,
      password: _password,
      school,
      department,
      email,
    });
    await teacher.save();
    return teacher;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateTeacher = async (req) => {
  try {
    const { name, surname } = req.body;
    const { teacherId } = req.params;
    const existTeacher = await Teacher.findById(teacherId);
    if (!existTeacher) {
      throw new Error("Öğretmen bulunamadı");
    }
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      teacherId,
      {
        name: name,
        surname: surname,
      },
      {
        new: true,
      }
    );
    return updatedTeacher;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllTeachers = async () => {
  try {
    const teachers = await Teacher.find();
    return teachers;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getTeacherById = async (req) => {
  try {
    const { teacherId } = req.params;
    const teacher = await Teacher.findById(teacherId);
    return teacher;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteTeacher = async (req) => {
  try {
    const { teacherId } = req.params;
    const existTeacher = await Teacher.findById(teacherId);
    if (!existTeacher) {
      throw new Error("Öğretmen bulunamadı");
    }
    await Teacher.findByIdAndDelete(teacherId);
    return "Öğretmen silindi";
  } catch (error) {
    throw new Error(error);
  }
};
