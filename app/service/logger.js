const winston = require('winston');
require('winston-daily-rotate-file');


function createTransport(path, level) {
    return new winston.transports.DailyRotateFile({
        filename: path,
        level: level,
        datePattern: 'DD-MM-YYYY',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d'
    });
}

function createLogger(path, level) {
    const transport = createTransport(path, level);

    return winston.createLogger({
        format: winston.format.combine(
            winston.format.timestamp({
                format: 'HH:mm:ss'
            }),
            winston.format.printf(({ level, message, timestamp }) => {
                return `${timestamp} : ${message}`;
            })
        ),
        transports: [transport],
    });
}

module.exports = createLogger;