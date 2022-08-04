const express = require('express')
const { getProcessAll } = require('../controllers/ProcessController')

const router = express.Router()

router.get('/processall', getProcessAll)

module.exports = router