const mongoose = require('mongoose');
const Prediction = require('../models/predictions');

const baseUrl = process.env.BASE_URL;

function createPrediction(req, res) {
  const {description, date, note} = req.body;
  const prediction = new Prediction({
    _id: mongoose.Types.ObjectId(),
    description,
    date,
    note
  });
  
  prediction
  .save()
  .then(prediction => {
    res.status(201).json({
      prediction,
      request: {
        type: 'GET',
        url: `${baseUrl}/predictions/${prediction._id}`
      }
    });
  })
  .catch((err) => {
    console.log('Error creating an prediction: ', err);
    res.status(400).json({
      message: 'Prediction not created'
    });
  });
}

module.exports = createPrediction;