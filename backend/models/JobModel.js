const Sequelize = require('sequelize')
const db = require('../config/database')

const { DataTypes } = Sequelize
const JobModel = db.define('job', {
    job_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    job_code: {
        type: DataTypes.STRING,
    },
    job_name: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
})

module.exports = JobModel