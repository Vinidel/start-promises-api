const Prediction = require('../models/predictions');

function getPredictionDetails(req, res) {
  const {id} = req.params;
  Prediction.findById(id)
  .populate('product')
  .exec()
  .then(prediction => {
    if(prediction) {
      res.status(200).json({
        prediction
      });
    } else {
      res.status(400).json({
        message: 'Order not found'
      });
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({message: 'Something went wrong'});
  });
}

module.exports = getPredictionDetails;
