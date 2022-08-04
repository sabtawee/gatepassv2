const Sequelize = require('sequelize')
const db = require('../config/database')

const { DataTypes } = Sequelize
const VendorModel = db.define('vendor', {
    vendor_id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    vendor_code: {
        type: DataTypes.STRING
    },
    vendor_name:{
        type: DataTypes.STRING
    },
    remark:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
})

module.exports = VendorModel