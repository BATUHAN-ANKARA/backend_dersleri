const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    surname: {
      type: Schema.Types.String,
      required: true,
    },
    student_number: {
      type: Schema.Types.String,
      unique: true,
      required: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
    department: {
      type: Schema.Types.String,
      required: true,
    },
    school: {
      type: Schema.Types.String,
      required: true,
    },
    qrCode: {
      type: Schema.Types.String,
    },
    faceImageUrl: {
      type: Schema.Types.String,
    },
    assignedLectures: [
      {
        lectureId: {
          type: Schema.Types.ObjectId,
          ref: "Lecture",
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
