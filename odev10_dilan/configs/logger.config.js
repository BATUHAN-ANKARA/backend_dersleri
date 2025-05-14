const winston = require("winston");
const winstonDailyRotateFile = require("winston-daily-rotate-file");
const { timestamp, prettyPrint, combine, json, colorize, label } =
  winston.format;

const logConfig = {
  defaultMeta: {
    api: "Node Server",
  },
  level: "verbose",
  transports: [
    new winstonDailyRotateFile({
      datePattern: "DD.MM.YYYY",
      filename: "my-app%DATE%.log",
      dirname: "./logs",
    }),
  ],
  format: combine(
    label({
        label:"Uygulama"
    }),
    prettyPrint(),
    timestamp(),
    colorize(),
    json()
  )
};

module.exports = logConfig