const express = require("express");
const {
  postCheckNum,
  postNumbering,
} = require("../controllers/NumberingController");

const router = express.Router();

router.post("/checknum", postCheckNum);
router.post("/postnumbering", postNumbering);

module.exports = router;
