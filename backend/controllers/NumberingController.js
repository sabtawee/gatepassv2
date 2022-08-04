const NumberingModel = require("../models/NumberingModel");

const postCheckNum = async (req, res) => {
  try {
    let cont = req.body.cont;
    const result = await NumberingModel.sequelize.query(
      `SELECT count(cont) as cont_num, cont  FROM numbering where cont = "${cont}"`
    );
    console.log(result[0]);
    res.json(result[0]);
  } catch (error) {
    console.log({ message: error.message });
  }
};

const postNumbering = async (req, res) => {
  try {
    let cont = req.body.cont;
    let vendor_code = req.body.vendorcode;
    let process = req.body.process;
    let sequence = req.body.sequence;
    let meterial = req.body.meterial;
    let qty = req.body.qty;
    let date = req.body.date;
    let job_name = req.body.job_name;
    let job_code = req.body.job_code;
    let vendor_name = req.body.vendor_name;
    let po_no = req.body.po_no;
    let meterial_des = req.body.meterial_des;
    let control_no = req.body.control_no;
    let process_name = req.body.process_name;

    await NumberingModel.sequelize
      .query(`INSERT INTO numbering (control_no, cont, vendor_code, process, sequence, material, qty)
     VALUES ("${control_no}", "${cont}", "${vendor_code}", "${process}", "${sequence}", "${meterial}", "${qty}");`);

    await NumberingModel.sequelize
      .query(`INSERT INTO result (date, job_name, job_code, vendor_name, vendor_code, po_no, qty, material, material_des, control_no, process, input_by) 
    VALUES ("${date}", "${job_name}", "${job_code}", "${vendor_name}", "${vendor_code}", "${po_no}", "${qty}", "${meterial}", "${meterial_des}", "${control_no}", "${process_name}", "${process_name}");`);

    res.json("Create Success !!");
  } catch (error) {
    console.log({ message: error.message });
  }
};

module.exports = { postCheckNum, postNumbering };
