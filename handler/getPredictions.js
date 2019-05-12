const Prediction = require('../models/predictions');

const baseUrl = process.env.BASE_URL;

function parsePredictionsToResponse(predictions) {
  return predictions.map(prediction => {
    return {
      description: prediction.description,
      date: prediction.date,
      request: {
        type: 'GET',
        url: `${baseUrl}/predictions/${prediction._id}`
      }
    };
  });
}

function getPredictions(req, res) {
  return Prediction
  .find()
  .select('description date _id')
  .exec()
    .then(predictions => {
      res.status(200).json({
        count: predictions.length,
        predictions: parsePredictionsToResponse(predictions),
      });    
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({
        message: 'An error happened'
      });
    });
}

module.exports = getPredictions;