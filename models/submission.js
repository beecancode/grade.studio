const mongoose = require('mongoose');
const { submissionSchema } = require('../schemas');


module.exports = mongoose.model('Submission', submissionSchema);