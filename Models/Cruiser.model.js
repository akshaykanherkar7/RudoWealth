const mongoose = require("mongoose");

const CruiserSchema = new mongoose.Schema({
  cuisername: { type: String, required: true },
  current_loca: { type: String, required: true },
  no_of_rides: { type: Number, required: true },
  avg_rating: { type: Number, required: true },
});

const CruiserModel = mongoose.model("cruiser", CruiserSchema);

module.exports = CruiserModel;
