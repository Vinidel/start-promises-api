const express = require('express');
const router = express.Router();
const createPrediction = require('../handler/createPrediction')
const getPredictions = require('../handler/getPredictions')
const getPredictionDetails = require('../handler/getPredictionDetails')

router.get('/', getPredictions);
router.get('/:id', getPredictionDetails);
router.post('/', createPrediction);


module.exports = router;
