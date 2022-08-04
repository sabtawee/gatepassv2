const express = require('express')
const { getVendorAll } = require('../controllers/VendorController')

const router = express.Router()

router.get('/vendorall', getVendorAll)

module.exports = router;