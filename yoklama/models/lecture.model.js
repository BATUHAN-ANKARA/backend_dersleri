const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lectureSchema = new Schema(
  {
    courseCode: {
      type: String,
    },
    courseName: {
      type: String,
    },
    schedule: [
      {
        date: {
          type: Date,
        },
        participants: [
          {
            studentId: {
              type: Schema.Types.ObjectId,
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
    teacher: {
      type: Schema.Types.ObjectId,
    },
    department: {
      type: String,
    },
  },
  {
    timestamps: true,
    minimize: true,
    autoIndex: true,
  }
);

const Lecture = mongoose.model("Lecture", lectureSchema, "lectures");

module.exports = Lecture;
