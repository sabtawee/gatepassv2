const Sequelize = require('sequelize')
const db = require('../config/database')

const { DataTypes } = Sequelize
const NumberingModel = db.define('numbering', {
    control_no: {
        type: DataTypes.STRING
    },
    cont:{
        type: DataTypes.STRING
    },
    vendor_code:{
        type: DataTypes.STRING
    },
    process:{
        type: DataTypes.STRING
    },
    sequence:{
        type: DataTypes.STRING
    },
    material: {
        type: DataTypes.STRING
    },
    qty:{
        type: DataTypes.STRING
    }
},{
    freezTableName: true
})

module.exports = NumberingModel