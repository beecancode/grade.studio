const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    correctAnswers: Number,
    
})

module.exports = mongoose.model('Student', studentSchema);