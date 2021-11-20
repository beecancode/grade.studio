const User = require('../models/user')
const Class = require('../models/class');

module.exports = { create }

async function create(req, res){

    try {
        console.log(req.body, req.user);
        const thisClass = await Class.findbyId(req.params.id);
        thisClass.assignments.push({
            name: req.body.name,
            possAnswers: req.body.possAnswers
        })
        await thisClass.save()
        res.status(201).json({data: 'added assignment'})
    } catch(err){
        res.status(400).json({err})
    }
}