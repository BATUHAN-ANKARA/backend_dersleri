const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    student_number: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    school: {
      type: String,
    },
    department: {
      type: String,
    },
    //almış olduğu dersler: BLM MAT1
    assignedLectures: [
      {
        lectureId: {
          type: Schema.Types.ObjectId,
        },
      },
    ],
  },
  {
    timestamps: true,
    minimize: true,
    autoIndex: true,
  }
);

const Student = mongoose.model("Student", studentSchema, "students");

module.exports = Student;
