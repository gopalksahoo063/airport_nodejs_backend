const mongoose = require('mongoose');

const appBasedCabsSchema = new mongoose.Schema({
  name: String,
  url: String,
  logo_url: String
});

const transportationSchema = new mongoose.Schema({
  type: String,
  details: String,
  location: String,
  services: [appBasedCabsSchema]
});

const parkingSchema = new mongoose.Schema({
  location: String,
  details: String,
  rates: String
});

const wifiSchema = new mongoose.Schema({
  availability: String,
  details: String
});

const terminalSchema = new mongoose.Schema({
  name: String,
  details: String,
  lat_long: {
    latitude: Number,
    longitude: Number
  },
  transportation: [transportationSchema],
  parking: {
    short_term: parkingSchema,
    long_term: parkingSchema
  },
  wifi: wifiSchema
});

const airportSchema = new mongoose.Schema({
  airport: {
    id: String,
    country_id: String,
    city_id: String,
    iata_code: String,
    icao_code: String,
    name: String,
    location: String,
    website: String
  },
  flights: {
    arrival: String,
    departure: String
  },
  terminals: [terminalSchema],
  transportation: {
    to_and_from_airport: String,
    cab_services: String,
    app_based_cabs: [appBasedCabsSchema]
  },
  contact: {
    email: [String],
    phone: [String],
    helpline: [String],
    police: [String]
  }
});

module.exports = mongoose.model('Airport', airportSchema);
