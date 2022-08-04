const Sequelize = require('sequelize')
const db = require('../config/database')

const { DataTypes } = Sequelize
const ResultModel = db.define('result', {
    date: {
        type: DataTypes.STRING
    },
    job_name: {
        type: DataTypes.STRING
    },
    job_code: {
        type: DataTypes.STRING
    },
    vendor_name: {
        type: DataTypes.STRING
    },
    vendor_code: {
        type: DataTypes.STRING
    },
    po_no: {
        type: DataTypes.STRING
    },
    qty: {
        type: DataTypes.STRING
    },
    material: {
        type: DataTypes.STRING
    },
    material_des: {
        type: DataTypes.STRING
    },
    control_no: {
        type: DataTypes.STRING
    },
    process: {
        type: DataTypes.STRING
    },
    input_by: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
})

module.exports = ResultModel