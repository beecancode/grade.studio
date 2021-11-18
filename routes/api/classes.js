const express = require('express');
const router = express.Router();
const classCtl = require('../../controllers/classes')

router.post('/create', classCtl.create);
router.get('/', classCtl.getClass);
module.exports = router;