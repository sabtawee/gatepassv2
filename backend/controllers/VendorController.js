const VendorModel = require('../models/VendorModel')

const getVendorAll = async (req, res) => {
    try {
        const result = await VendorModel.findAll()
        res.json(result)
    } catch (error) {
        console.log({message: error.message})
    }
}

module.exports = { getVendorAll }