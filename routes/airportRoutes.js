const express = require('express');
const router = express.Router();
const airportController = require('../controllers/airportController');

router.post('/airports', airportController.createAirport);
router.get('/airports', airportController.getAirports);

// Route to get app based cabs for a specific airport
router.get('/airports/:id/app_based_cabs', airportController.getAppBasedCabs);


module.exports = router;
