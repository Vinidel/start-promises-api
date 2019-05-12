const mongoose = require('mongoose');

const predictionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description: {type: String, required: true},
  note: {type: String},
  date: {type: Date, required: true}
});

module.exports = mongoose.model('Prediction', predictionSchema);