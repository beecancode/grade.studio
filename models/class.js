
const mongoose = require('mongoose');
const {studentSchema} = require('../schemas');


const classSchema = new mongoose.Schema({
    name: String,
    students: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' }],
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});


module.exports = mongoose.model('Class', classSchema);