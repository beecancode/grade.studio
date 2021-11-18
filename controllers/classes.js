const Class = require('../models/class');
const Student = require('../models/student')


module.exports = { create };

async function create(req, res) {


  try {
    console.log(req.body, req.user);
    const { name, students } = req.body
    const newStudents = await students.map(student => Student.create({
      name: student
    }))
    const newClass = await Class.create({
      name,
      teacher: req.user,
      students: newStudents
    });
    res.json({ status: 200 })
  } catch (err) {
    console.log(err);
    res.status(400).json({ err })
  }
}
