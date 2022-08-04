const ResultModel = require('../models/ResultModel')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const getResultAll = async (req, res) => {
    try {
        const result = await ResultModel.findAll()
        res.json(result)
    } catch (error) {
        console.log({ message: error.message })
    }
}

const getResultPo = async (req, res) => {
    try {
        let po = req.params.po
        const result = await ResultModel.findAll({
            where: {
                po_no: po
            }
        })
        res.json(result)
        console.log(result)
    } catch (error) {
        console.log({ message: error.message })
    }
} 

module.exports = { getResultAll, getResultPo }
