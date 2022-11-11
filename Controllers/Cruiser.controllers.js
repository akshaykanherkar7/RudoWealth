const express = require("express");
const CruiserController = express.Router();

const CruiserModel = require("../Models/Cruiser.model");

CruiserController.post("/", async (req, res) => {
  try {
    let Cruiser = new CruiserModel(req.body);
    await Cruiser.save();
    return res.status(200).send({
      message: "Cruiser detail successfully saved",
      Cruiser: Cruiser,
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

CruiserController.get("/", async (req, res) => {
  try {
    let Cruiser = await CruiserModel.find();
    return res.status(200).send(Cruiser);
  } catch (err) {
    return res.status(500).send(err);
  }
});

CruiserController.patch("/:id", async (req, res) => {
  try {
    let Cruiser = await CruiserModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.status(200).send({
      message: "Cruiser detail successfully updated",
      Cruiser: Cruiser,
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

CruiserController.delete("/:id", async (req, res) => {
  try {
    let Cruiser = await CruiserModel.findOneAndDelete(
      { _id: req.params.id },
      { new: true }
    );
    return res.status(200).send({
      message: "Cruiser detail successfully ",
      Cruiser: Cruiser,
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = CruiserController;
