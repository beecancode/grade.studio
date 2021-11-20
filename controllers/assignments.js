const Class = require('../models/class');
let Assignment = require('../models/assignment');

async function create(req, res){
	console.log(req.body)
	try {
		const { classId, name, possAnswers } = req.body
		const thisClass = await Class.findById(classId);
		const newAssignment = await Assignment.create({ name, possAnswers })
		thisClass.assignments.push(newAssignment._id)
		thisClass.save()
		await thisClass.populate("teacher")
		await thisClass.populate("students")
		await thisClass.populate("assignments")
		console.log(thisClass)
		res.status(201).json({data: thisClass})
	} catch(err){
		console.log(err)
		res.status(400).json(err)
	}
} 

module.exports = { create };