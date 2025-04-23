const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendanceSchema = new Schema(
  {
    participants: [
      {
        studentId: {
          type: Schema.Types.ObjectId, 
          ref: "Student",
          required: true,
        },
        joinMethod: {
          type: String,
          enum: ["QR", "FaceID"],
          required: true,
        },
        joinTime: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  { timestamps: true, minimize: true, autoIndex: true }
);

const Attendance = mongoose.model(
  "Attendance",
  attendanceSchema,
  "attendances"
); 
module.exports = Attendance;
