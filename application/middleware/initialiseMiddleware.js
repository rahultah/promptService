const express = require("express")

class InitialiseMiddleware{
    constructor(app){
        this.expApp = app

    }
    init(){
        InitialiseMiddleware.addRoutes(this.expApp)
    }
    static addRoutes(app){
        app.use(express.urlencoded({urlencoded:true}));
        app.use("/promptService",require("../../routes"))
    }
}
module.exports = InitialiseMiddleware;