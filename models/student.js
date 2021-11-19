const mongoose = require('mongoose');

const { studentSchema } = require('../schemas')

module.exports = mongoose.model('Student', studentSchema);