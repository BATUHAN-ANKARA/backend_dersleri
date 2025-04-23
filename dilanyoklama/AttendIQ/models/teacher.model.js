const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    lectures: [
      {
        lectureId: {
          type: Schema.Types.ObjectId,
          ref: "Lecture",
        },
      },
    ],
  },
  { timestamps: true, minimize: true, autoIndex: true }
);

const Teacher = mongoose.model("Teacher", teacherSchema, "teachers");
module.exports = Teacher;
