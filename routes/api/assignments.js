const express = require('express');
const router = express.Router();
const assignmentCtl = require('../../controllers/assignments');

router.post('/create', assignmentCtl.create);


module.exports = router;