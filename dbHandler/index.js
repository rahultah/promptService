const mongoose = require('mongoose');
class dbHandler{
    static async connect(){
        mongoose.connect('mongodb://127.0.0.1:27017/promptService');
    }
}

module.exports = dbHandler