const mongoose = require('mongoose');
const { studentSchema } = require('../schemas');

const submissionSchema = new mongoose.Schema({
    student: studentSchema,
    correctAnswers: Number
})

module.exports = mongoose.model('Submission', submissionSchema);