require("dotenv").config();
const { App } = require("./application")
const { logger } = require("./logging/logger")
const dbHandler = require("./dbHandler")

const startApplication = async () => { 
    try {
        //To implement ENV Variable Based login
        await dbHandler.connect()
        const app = new App()
        app.start();
    } catch (error) {
        console.log(error)
    }
}
startApplication().then(() => console.log("____prompt Service started successfully____"));
