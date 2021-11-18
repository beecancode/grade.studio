
const mongoose = require('mongoose');
const {studentSchema} = require('../schemas');

const submissionSchema = new mongoose.Schema({
    student: studentSchema,
    correctAnswers: Number
})

const assignmentSchema = new mongoose.Schema({
    name: String,
    possAnswers: Number,
    submissions: [submissionSchema]

})



const classSchema = new mongoose.Schema({
    name: String,
    students: [studentSchema],
    assignments: [assignmentSchema],
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});


module.exports = mongoose.model('Class', classSchema);