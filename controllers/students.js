const Class = require('../models/class')

module.exports = {create}

async function create(req, res){
    try {
        const newClass = await Class.findbyId(req.params.id);
        newClass.students.push({name: req.body.name})
        await newClass.save()
        

        
    }
}