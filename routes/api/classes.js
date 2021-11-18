const express = require('express');
const router = express.Router();
const classCtl = require('../../controllers/classes')

router.post('/create', classCtl.create);

module.exports = router;