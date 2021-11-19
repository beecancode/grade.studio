const mongoose = require('mongoose');
const { assignmentSchema } = require('../schemas');


module.exports = mongoose.model('Assignment', assignmentSchema);