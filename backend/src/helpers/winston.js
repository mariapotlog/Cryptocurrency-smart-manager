import winston from 'winston';

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss.ssss",
    }),
    winston.format.printf(
      logData => `${logData.timestamp} ${logData.level.toUpperCase()} ${logData.message}`
    ),
  ),
  handleExceptions: true,
  transports: [new winston.transports.Console()],
})

logger.stream = {
  write(message) {
    logger.info(message)
  }
}

export default logger;