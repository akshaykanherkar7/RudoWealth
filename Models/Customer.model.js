const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  current_loca: { type: String, required: true },
  no_of_rides: { type: Number, required: true },
  avg_rating: { type: Number, required: true },
});

const CustomerModel = mongoose.model("customer", CustomerSchema);

module.exports = CustomerModel;
