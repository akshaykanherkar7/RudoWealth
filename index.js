const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const { connection } = require("./Config/Config");
const CustomerController = require("./Controllers/Customer.controller");
const CruiserController = require("./Controllers/Cruiser.controllers");
const CustomerModel = require("./Models/Customer.model");

app.get("/", async (req, res) => {
  return res.status(200).send("HomePage");
});

app.use("/customer", CustomerController);
app.use("/cruiser", CruiserController);

const listCustomers = () => {
  CustomerModel.find().then((customers) => {
    console.info(customers);
    console.info(`${customers.length} customers`);
    connection.close();
  });
};

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connection Established");
    console.log("Server is listening on port " + process.env.PORT);
  } catch (err) {
    console.log("err:", err);
  }
});

module.exports = {
  listCustomers,
};
