const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lectureSchema = new Schema(
  {
    courseCode: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },
    // öğretmen başka departmanda aynı dersi verebilir ihtimaline karşı
    departmant: {
      type: String,
      required: true,
    },
    schedule: [
      {
        date: {
          type: Date,
          required: true,
        },
        participants: [
          {
            studentId: {
              type: Schema.Types.ObjectId,
              ref: "Student",
              required: true,
            },
            name: {
              type: String,
            },
            surname: {
              type: String,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
    minimize: true,
    autoIndex: true,
  }
);

const Lecture = mongoose.model("Lecture", lectureSchema, "lectures");

module.exports = Lecture;
