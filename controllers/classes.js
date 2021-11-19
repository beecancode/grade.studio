const Class = require('../models/class');
const Student = require('../models/student')


module.exports = { create, getClass };

async function getClass(req, res) {
  try {
    const aClass = await Class.findOne({name: req.body.name})
    await aClass.populate(["teacher", "students"]);
    res.json({data: aClass, status: 200})

  } catch (err) {
    console.log(err);
    res.status(400).json({ err })
  }
}

async function create(req, res) {


  try {
    console.log(req.body, req.user);
    const { name, students } = req.body
    const newStudents = await Promise.all(students.map(student => Student.create({
      name: student
    }).then(newStudent => newStudent._id)))
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
