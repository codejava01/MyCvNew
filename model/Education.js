const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var education = new Schema({
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  School: {
    type: String,
  },
  Description: {
    type: String,
  },
});

var EducationModel = mongoose.model("education", education);
module.exports = EducationModel;
