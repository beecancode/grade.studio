const express = require('express');
const router = express.Router();
const submissionCtl = require('../../controllers/submissions')

router.post('/create', submissionCtl.create)
router.put('/update', submissionCtl.update)
module.exports = router;