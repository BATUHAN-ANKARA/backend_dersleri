const winston = require("winston");
const winstonDailyRotateFile = require("winston-daily-rotate-file");
const { timestamp, prettyPrint, json, combine, colorize, label } =
  winston.format;

const logConfig = {
  defaultMeta: {
    api: "Node Server",
  },
  level: "verbose",
  transports: [
    new winstonDailyRotateFile({
      datePattern: "DD.MM.YYYY",
      filename: "myapp-%DATE%.log",
      dirname: "./logs/",
    }),
  ],
  format: combine(
    label({
      label: "Uygulama V1",
    }),
    timestamp(),
    prettyPrint(),
    colorize(),
    json()
  ),
};

module.exports = logConfig
