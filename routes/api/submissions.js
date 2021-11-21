const express = require('express');
const router = express.Router();
const submissionCtl = require('../../controllers/submissions')

router.post('/create', submissionCtl.create)

module.exports = router;