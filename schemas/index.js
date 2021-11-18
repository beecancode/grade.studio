const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }
})

const submissionSchema = new mongoose.Schema({
    student: studentSchema,
    correctAnswers: Number,
    sumbissionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Submission"
    }
})

const assignmentSchema = new mongoose.Schema({
    name: String,
    possAnswers: Number,
    submissions: [submissionSchema],
    assignmentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Assignment"
    }
})

const schemaObject = {
    studentSchema,
    submissionSchema,
    assignmentSchema
}

module.exports = schemaObject