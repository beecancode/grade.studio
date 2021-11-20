const User = require('../models/user')
const Class = require('../models/class');
const Assignment = require('../models/assignment')

module.exports = { create };

async function create(req, res){
 console.log(req.body)
    try {
        console.log(req.body, req.user);
        const thisClass = await Class.findbyId(req.params.class.id);
        console.log(req.params.class.id);
        const newAssignment = await Assignment.create({
            name: req.body.name,
            possAnswers: req.body.possAnswers
        })
        thisClass.assignments.push({
            newAssignment
        })
        await thisClass.save()
        res.status(201).json({data: 'added assignment'})
    } catch(err){
        console.log(err)
}
        res.status(400).json({err})
    }
    