const express = require('express')
const { getItemAll, getItemByOne, getSearchItem } = require('../controllers/ItemController')

const router = express.Router()

router.get('/itemall', getItemAll)

router.get('/itemcode/:itemcode', getItemByOne)
router.get('/itemsearch/:itemcode', getSearchItem)

module.exports = router
