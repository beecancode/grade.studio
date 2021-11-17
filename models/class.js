
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    assignments: [assignmentSchema]
})

const assignmentSchema = new mongoose.Schema({
    name: String,
    possAnswers: Number,

})

const classSchema = new mongoose.Schema({
    name: String,
    students: [studentSchema],
    assignments: [assignmentSchema],
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});


module.exports = mongoose.model('Class', classSchema);