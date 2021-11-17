
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String
})

const assignmentSchema = new mongoose.Schema({
    name: String,
    possAnswers: Number,
    submissions: [submissionSchema]

})

const submissionSchema = new mongoose.Schema({
    student: studentSchema,
    correctAnswers: Number
})

const classSchema = new mongoose.Schema({
    name: String,
    students: [studentSchema],
    assignments: [assignmentSchema],
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});


module.exports = mongoose.model('Class', classSchema);