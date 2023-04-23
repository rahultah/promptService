const mongoose = require('mongoose');
const promptsSchema = mongoose.Schema({
    promptName: String,
    promptType: String,
    promptValue: String,
    placeHolderCount: Number,
    userId: String
});
module.exports = promptsSchema