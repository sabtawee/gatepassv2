const express = require("express");
const bodyParser = require("body-parser");

const db = require("./config/database");
const JobRouter = require('./routes/JobRouter')
const VendorRouter = require('./routes/VendorRouter')
const ProcessRouter = require('./routes/ProcessRouter')
const ItemRouter = require('./routes/ItemRouter')
const NumberingRouter = require('./routes/NumberingRouter')
const ResultRouter = require('./routes/ResultRouter')

const cors = require("cors");
const app = express();
try {
  db.authenticate();
  console.log("Connetion has been establixhed successfully");
} catch (error) {
  console.log("Unable to connect to the database: ", error);
}

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

app.use("/api", JobRouter);
app.use("/api", VendorRouter);
app.use("/api", ProcessRouter);
app.use("/api", ItemRouter);
app.use("/api", NumberingRouter);
app.use("/api", ResultRouter);



app.listen(3121, () => console.log("Server running on port 3121"));
