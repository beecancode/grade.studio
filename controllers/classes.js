const Class = require('../models/class');
const Student = require('../models/student')
const User = require('../models/user')


module.exports = { create, getClass };

async function getClass(req, res) {
  try {
    const { user: { username } } = req
    const teacher = await User.findOne({ username })
    const classes = await Class.find({ teacher: teacher._id })
    await Promise.all(classes.map(aClass => aClass.populate(["teacher", "students", "assignments"])));
    console.log(classes)
    res.json({ data: classes, status: 200 })

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

