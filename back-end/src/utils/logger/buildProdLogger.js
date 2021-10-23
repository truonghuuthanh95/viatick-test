const { format, createLogger, transports } = require("winston");
const { timestamp, combine, printf, errors, json, label, align } = format;
import DailyRotateFile from "winston-daily-rotate-file";

const buildProdLogger = () => {
  const myFormat = printf(({ level, message, timestamp, label }) => {
    return `[${timestamp}] - [${level}]: ${message}`;
  });
  return createLogger({
    level: "info",
    // format: winston.format.simple(),
    format: combine(
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      align(),
      myFormat
    ),
    // defaultMeta: { service: "user-service" },
    transports: [
      new transports.Console(),
      new DailyRotateFile({
        filename: `logs/%DATE%.log`,
        datePattern: `YYYY-MM-DD-HH`,
        zippedArchive: true,
        maxSize: `20m`,
        maxFiles: `14d`,
        prepend: true,
        level: "error",
      }),
    ],
  });
};

export default buildProdLogger;
