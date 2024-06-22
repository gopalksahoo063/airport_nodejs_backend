const Airport = require('../models/airportModel');

// Create a new airport
exports.createAirport = async (req, res) => {
    try {
        const airport = new Airport(req.body);
        await airport.save();
        res.status(201).send(airport);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all airports
exports.getAirports = async (req, res) => {
    try {
        const airports = await Airport.find();
        res.status(200).send(airports);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get app based cabs for a specific airport
exports.getAppBasedCabs = async (req, res) => {
    const airportId = req.params.id; // Extract airport ID from URL parameter
    
    try {
        // Find the airport by ID
        const airport = await Airport.findOne({ 'airport.id': airportId });

        if (!airport) {
            return res.status(404).json({ message: 'Airport not found' });
        }

        // Return app_based_cabs if available
        if (airport.transportation && airport.transportation.app_based_cabs) {
            const appBasedCabs = airport.transportation.app_based_cabs;
            res.status(200).json(appBasedCabs);
        } else {
            res.status(404).json({ message: 'App based cabs not found for this airport' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};