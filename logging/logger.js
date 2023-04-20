const winston = require("winston");
const { configLoader } = require("../application");

const logLevels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
};

const getLogger = () => {
    const logConfiguration = {
        'transports': [
            new winston.transports.File({
                filename: configLoader.getConfigValue("errorFilePath")
            })
        ]
    };
    if (!this.logger) {

        const logger = winston.createLogger(logConfiguration);
        this.logger = logger
    }
    return this.logger

}
module.exports.logger = getLogger()

