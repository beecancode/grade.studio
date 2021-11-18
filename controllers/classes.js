const Class = require('../models/class')


module.exports = { create };

async function create(req, res) {


  try {
    console.log(req.body, req.user);
    const newClass = await Class.create({
      name: req.body.name,
      teacher: req.user
    });
    res.json({status:200})
  } catch (err) {
    console.log(err);
    res.status(400).json({ err })
  }
}
