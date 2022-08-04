const express = require('express')
const { getJobAll } = require('../controllers/JobController')

const router = express.Router();

router.get("/joball", getJobAll);

module.exports = router;