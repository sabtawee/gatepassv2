const Sequelize = require('sequelize')
const db = require('../config/database')

const { DataTypes } = Sequelize
const ItemModel = db.define('item', {
    item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    item_code: {
        type: DataTypes.STRING
    },
    item_name: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true
})

module.exports = ItemModel