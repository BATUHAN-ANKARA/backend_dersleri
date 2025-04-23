const Lecture = require("../models/lecture.model");
const Teacher = require("../models/teacher.model");
const Student = require("../models/student.model");

7
exports.createLecture = async (req) => {
  try {
    const { courseCode, courseName, teacherId, department } = req.body;

    const existCourse = await Lecture.findOne({ courseCode });
    if (existCourse) {
      throw new Error("Bu ders kodu ile zaten bir ders mevcut.");
    }

    const existTeacher = await Teacher.findById(teacherId);
    if (!existTeacher) {
      throw new Error("Öğretmen bulunamadı.");
    }

    const newLecture = new Lecture({
      courseCode,
      courseName,
      teacher: teacherId,
      department,
    });

    await newLecture.save();

    existTeacher.lectures.push(newLecture._id);
    await existTeacher.save();

    return newLecture;
  } catch (error) {
    throw new Error(error.message || error);
  }
};


exports.attendLecture = async (req) => {
  try {
    const { name, surname, studentId, date, lectureId } = req.body;

    const existStudent = await Student.findById(studentId);
    if (!existStudent) {
      throw new Error("Öğrenci bulunamadı.");
    }

    const existLecture = await Lecture.findById(lectureId);
    if (!existLecture) {
      throw new Error("Ders bulunamadı.");
    }

    existLecture.schedule.push({
      date,
      participants: [
        {
          studentId: studentId,
          name,
          surname,
        },
      ],
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
      throw new Error("Öğretmen bulunamadı.");
    }

    const lectures = await Lecture.find({ teacher: teacherId });
    return lectures;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteLectures = async (req) => {
  try {
    const { lectureId } = req.params;
    
    const lectureToDelete = await Lecture.findById(lectureId);
    if (!lectureToDelete) {
      throw new Error("Ders bulunamadı.");
    }
  
    const teacherToUpdate = await Teacher.findById(lectureToDelete.teacher);
    if (teacherToUpdate) {
      teacherToUpdate.lectures = teacherToUpdate.lectures.filter(
        (lectureIdInArray) =>
          lectureIdInArray.toString() !== lectureId.toString()
      );
      await teacherToUpdate.save();
    }

    const studentsToUpdate = await Student.find({
      assignedLectures: lectureId,
    });
    for (let student of studentsToUpdate) {
      student.assignedLectures = student.assignedLectures.filter(
        (lecture) => lecture.toString() !== lectureId.toString()
      );

    //for each ? 
      await student.save();
    }

    await Lecture.findByIdAndDelete(lectureId);
    return "Ders ve ilişkili veriler başarıyla silindi.";
  } catch (error) {
    throw new Error(error);
  }
};
