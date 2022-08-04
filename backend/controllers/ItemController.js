const ItemModel = require("../models/ItemModel");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const getItemAll = async (req, res) => {
  try {
    const result = await ItemModel.findAll();
    res.json(result);
  } catch (error) {
    console.jog({ message: error.message });
  }
};

const getItemByOne = async (req, res) => {
  try {
    let item_code = req.params.itemcode;
    const result = await ItemModel.sequelize.query(
      `SELECT * FROM item WHERE item_code = '${item_code}'`
    );
    res.json(result[0]);
  } catch (error) {
    console.jog({ message: error.message });
  }
};

const getSearchItem = async (req, res) => {
  try {
    let item_code = req.params.itemcode;
    const result = await ItemModel.findAll({
      where: {
        item_code:{
          [Op.like]:`${item_code}%`,
        } 
      },
    });
    console.log(result);
    res.json(result);
  } catch (error) {
    console.jog({ message: error.message });
  }
};

module.exports = { getItemAll, getItemByOne, getSearchItem };
