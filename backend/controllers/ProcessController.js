const ProcesModel = require('../models/ProcessModel')

const getProcessAll = async (req, res) => {
    try {
        const result = await ProcesModel.findAll()
        res.json(result)
    } catch (error) {
        console.log({message: error.message})
    }
}

module.exports = { getProcessAll }