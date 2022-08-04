const Sequelize = require('sequelize')
const db = require('../config/database')

const { DataTypes } = Sequelize
const ProcesModel = db.define('process', {
    process_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    process_code: {
        type: DataTypes.STRING
    },
    process_name:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
})

module.exports = ProcesModel