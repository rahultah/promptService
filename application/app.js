const express = require("express");
const initialiseMiddleware = require("./middleware/initialiseMiddleware.js")
class App {
    constructor() {
        const app = express()
        new initialiseMiddleware(app).init()
        this.app = app
    }
    start() {
        // start server
        const { NODE_SVC_PORT } = process.env;
        const port = Number(NODE_SVC_PORT);
        this.app.listen(port);
        console.log(`application started on port : ${port}`);
    }
}

module.exports = App