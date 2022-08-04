const JobModel = require('../models/JobModel')

const getJobAll = async (req, res) => {
    try {
        const result = await JobModel.findAll()
        res.json(result)
    } catch (error) {
        console.log({message : error.message})
    }
}

module.exports = { getJobAll }