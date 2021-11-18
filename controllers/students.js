const Class = require('../models/class')

module.exports = { create };

async function create(req, res){


    try {
        console.log(req.body, req.user);
        const newClass = await Class.findbyId(req.params.id);
        newClass.students.push({name: req.body.name})
        await newClass.save()
        res.status(201).json({data: 'added student'})
     
    } catch(err){
        res.status(400).json({err})
    }
}