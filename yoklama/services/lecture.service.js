const Lecture = require("../models/lecture.model");
const Teacher = require("../models/teacher.model");
const Student = require("../models/student.model");

exports.createLecture = async (req) => {
  try {
    const { courseCode, courseName, teacherId, department } = req.body;
    const existCourse = await Lecture.findOne({ courseCode: courseCode });
    if (existCourse) {
      throw new Error(error);
    }
    const existTeacher = await Teacher.findById(teacherId);
    if (!existTeacher) {
      throw new Error("Öğretmen bulunamadı");
    }
    const lecture = new Lecture({
      courseCode,
      courseName,
      teacher: teacherId,
      department,
    });
    await lecture.save();
    // öğretmenin lectures alanına lecture idsini ekle (dizi=> push kullanılacak)
    existTeacher.lectures.push(lecture._id);
    await existTeacher.save();
    return lecture;
  } catch (error) {
    throw new Error(error);
  }
};

exports.attendLecture = async (req) => {
  try {
    const { name, surname, studentId, date, lectureId } = req.body;
    const existStudent = await Student.findById(studentId);
    if (!existStudent) {
      throw new Error("Öğrenci bulunamadı");
    }
    const existLecture = await Lecture.findById(lectureId);
    if (!existLecture) {
      throw new Error("Ders bulunamadı");
    }
    //schedule.map veya find veya filter
    existLecture.schedule.push({
      date: date,
      participants: {
        studentId: studentId,
        name: name,
        surname: surname,
      },
    });
    await existLecture.save();
    return existLecture;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllLectures = async () => {
  try {
    const lectures = await Lecture.find();
    return lectures;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getLecturesByTeacher = async (req) => {
  try {
    const { teacherId } = req.params;
    const existTeacher = await Teacher.findById(teacherId);
    if (!existTeacher) {
      throw new Error("Öğretmen bulunamadı");
    }
    const lectures = await Lecture.find({ teacher: teacherId });
    return lectures;
  } catch (error) {
    throw new Error(error);
  }
};

//lecture silinirken aynı zamanda da teacher modelinden temizlenmeli + student modelinden de
//derse katılım oranını hesaplat (şu ana kadar 10 ders yapıldı x öğrencisi bunların 9una katıldı)
