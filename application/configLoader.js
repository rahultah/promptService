const fs = require("fs");
const { NODE_ENV, CONFIG_FILE, NODE_SVC_PORT } = process.env;

const readFile = (filePath) =>
    JSON.parse(fs.readFileSync(filePath, { encoding: "utf8", flag: "r" }));
class configLoader {
    constructor() {
        this.env = NODE_ENV;
        this.appConfig = readFile(`${CONFIG_FILE}/${NODE_ENV}/promptService.json`);
        this.port = NODE_SVC_PORT;
    }

    getConfigValue(configKey, isFilePath = false) {
        if (this.appConfig && this.appConfig[configKey]) {
            if (isFilePath) {
                return readFile(this.appConfig[configKey]);
            }
            return this.appConfig[configKey];
        }
        return null;
    }
}

module.exports = configLoader;
