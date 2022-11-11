const express = require("express");
const CustomerController = express.Router();

const CustomerModel = require("../Models/Customer.model");

CustomerController.post("/", async (req, res) => {
  try {
    let customer = new CustomerModel(req.body);
    await customer.save();
    return res.status(200).send({
      message: "Customer detail successfully saved",
      customer: customer,
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

CustomerController.get("/", async (req, res) => {
  try {
    let customer = await CustomerModel.find();
    return res.status(200).send(customer);
  } catch (err) {
    return res.status(500).send(err);
  }
});

CustomerController.patch("/:id", async (req, res) => {
  try {
    let customer = await CustomerModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.status(200).send({
      message: "Customer detail successfully updated",
      customer: customer,
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

CustomerController.delete("/:id", async (req, res) => {
  try {
    let customer = await CustomerModel.findOneAndDelete(
      { _id: req.params.id },
      { new: true }
    );
    return res.status(200).send({
      message: "Customer detail successfully ",
      customer: customer,
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = CustomerController;
