const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teacherSchema = new Schema(
  {
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    password: {
      type: String,
    },
    school: {
      type: String,
    },
    email: {
      type: String,
    },
    lectures: [
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

const Teacher = mongoose.model("Teacher", teacherSchema, "teachers");

module.exports = Teacher;
