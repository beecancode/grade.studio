const mongoose = require('mongoose');
const { submissionSchema } = require('../schemas');

const assignmentSchema = new mongoose.Schema({
    name: String,
    possAnswers: Number,
    submissions: [submissionSchema]
})

module.exports = mongoose.model('Assignment', assignmentSchema);