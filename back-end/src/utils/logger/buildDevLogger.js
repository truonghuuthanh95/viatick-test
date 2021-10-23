const { format, createLogger, transports } = require("winston");
const { timestamp, combine, printf, errors, json, label } = format;

const buildDevLogger = () => {
  const myFormat = printf(({ level, message, timestamp }) => {
    return `[${timestamp}] - [${level}]: ${message}`;
  });

  return createLogger({
    level: "debug",
    // format: winston.format.simple(),
    format: combine(
      format.colorize(),
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      myFormat
    ),
    //defaultMeta: { service: 'user-service' },
    transports: [new transports.Console()],
  });
};

export default buildDevLogger;
