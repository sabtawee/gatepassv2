const express = require('express')
const { getResultAll, getResultPo } = require('../controllers/ResultController')

const router = express.Router()

router.get('/resultall', getResultAll)
router.get('/resultpo/:po', getResultPo)

module.exports = router;