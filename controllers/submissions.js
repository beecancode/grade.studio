const Submission = require('../models/submission')
const Assignment = require('../models/assignment')
const Student = require('../models/student')

module.exports = {create};

async function create(req, res){
	console.log(req.body)
	try {
		const { studentId, correctAnswers, assignmentId  } = req.body
		const student = await Student.findById(studentId)
		const assignment = await Assignment.findById(assignmentId);
		const newSubmission = await Submission.create({ correctAnswers })
		assignment.submissions.push(newSubmission._id)
		assignment.save()
		await assignment.populate("submissions")
		console.log(assignment)
		res.status(201).json({data: assignment})
	} catch(err){
		console.log(err)
		res.status(400).json({ err })
	}
} 