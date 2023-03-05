const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var exprerience = new Schema({
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  company: {
    type: String,
  },
  Description: {
    type: String,
  },
});

var ExprerienceModel = mongoose.model("exprerience", exprerience);
module.exports = ExprerienceModel;
