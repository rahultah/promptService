const mongoose = require('mongoose');
const promptsSchema = require("./models/prompts")
class dbHandler{
    //To implement ENV Variable Based login
    static async connect(){
        mongoose.connect('mongodb://127.0.0.1:27017/promptService');
    }
    static getPromptsModel(){
        const Prompts = mongoose.model('prompts', promptsSchema);
        return Prompts
    }
}

module.exports = dbHandler