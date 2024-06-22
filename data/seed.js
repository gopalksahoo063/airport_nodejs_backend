const mongoose = require('mongoose');
const Airport = require('../models/airportModel');
const connectDB = require('../config/db');

require('dotenv').config();

const seedAirports = async () => {
    await connectDB();

    const airportsData = [
        {
            airport: {
                id: "DEL",
                country_id: "IN",
                city_id: "DEL",
                iata_code: "DEL",
                icao_code: "VIDP",
                name: "Indira Gandhi International Airport",
                location: "New Delhi, India",
                website: "https://www.newdelhiairport.in"
            },
            flights: {
                arrival: "https://www.newdelhiairport.in/arrivals",
                departure: "https://www.newdelhiairport.in/departures"
            },
            terminals: [
                {
                    name: "Terminal 1",
                    details: "Domestic flights",
                    lat_long: {
                        latitude: 28.5562,
                        longitude: 77.0999
                    },
                    transportation: [
                        {
                            type: "Taxi",
                            details: "Prepaid taxi services available",
                            location: "Outside Arrival Hall"
                        },
                        {
                            type: "Bus",
                            details: "Local and long-distance bus services",
                            location: "Bus station at terminal exit"
                        },
                        {
                            type: "Metro",
                            details: "Delhi Metro services to various parts of the city",
                            location: "Metro station adjacent to terminal"
                        },
                        {
                            type: "App-Based Cabs",
                            services: [
                                {
                                    name: "Uber",
                                    url: "https://www.uber.com/global/en/airports/del/",
                                    logo_url: "https://d1a3f4spazzrp4.cloudfront.net/uber-com/universal/20px-37d92b9ad2f4f057e52486ecbf01a5e1.svg"
                                },
                                {
                                    name: "Ola",
                                    url: "https://www.olacabs.com",
                                    logo_url: "https://www.olacabs.com/webstatic/img/ola-logo.svg"
                                }
                            ],
                            details: "Available for pick-up and drop-off at designated areas",
                            location: "Various pick-up points as specified by the app"
                        }
                    ],
                    parking: {
                        short_term: {
                            location: "Near Terminal 1",
                            details: "Short-term parking available for up to 24 hours",
                            rates: "150 INR per hour"
                        },
                        long_term: {
                            location: "Near Terminal 1",
                            details: "Long-term parking available for more than 24 hours",
                            rates: "500 INR per day"
                        }
                    },
                    wifi: {
                        availability: "Free",
                        details: "Free WiFi is available throughout Terminal 1. Connect to the 'Delhi Airport Free WiFi' network and follow the instructions to get connected."
                    }
                },
                {
                    name: "Terminal 2",
                    details: "Domestic flights",
                    lat_long: {
                        latitude: 28.5623,
                        longitude: 77.1207
                    },
                    transportation: [
                        {
                            type: "Taxi",
                            details: "Prepaid taxi services available",
                            location: "Outside Arrival Hall"
                        },
                        {
                            type: "Bus",
                            details: "Local and long-distance bus services",
                            location: "Bus station at terminal exit"
                        },
                        {
                            type: "Metro",
                            details: "Delhi Metro services to various parts of the city",
                            location: "Metro station adjacent to terminal"
                        },
                        {
                            type: "App-Based Cabs",
                            services: [
                                {
                                    name: "Uber",
                                    url: "https://www.uber.com/global/en/airports/del/",
                                    logo_url: "https://d1a3f4spazzrp4.cloudfront.net/uber-com/universal/20px-37d92b9ad2f4f057e52486ecbf01a5e1.svg"
                                },
                                {
                                    name: "Ola",
                                    url: "https://www.olacabs.com",
                                    logo_url: "https://www.olacabs.com/webstatic/img/ola-logo.svg"
                                }
                            ],
                            details: "Available for pick-up and drop-off at designated areas",
                            location: "Various pick-up points as specified by the app"
                        }
                    ],
                    parking: {
                        short_term: {
                            location: "Near Terminal 2",
                            details: "Short-term parking available for up to 24 hours",
                            rates: "150 INR per hour"
                        },
                        long_term: {
                            location: "Near Terminal 2",
                            details: "Long-term parking available for more than 24 hours",
                            rates: "500 INR per day"
                        }
                    },
                    wifi: {
                        availability: "Free",
                        details: "Free WiFi is available throughout Terminal 2. Connect to the 'Delhi Airport Free WiFi' network and follow the instructions to get connected."
                    }
                },
                {
                    name: "Terminal 3",
                    details: "International and domestic flights",
                    lat_long: {
                        latitude: 28.5562,
                        longitude: 77.1000
                    },
                    transportation: [
                        {
                            type: "Taxi",
                            details: "Prepaid taxi services available",
                            location: "Outside Arrival Hall"
                        },
                        {
                            type: "Bus",
                            details: "Local and long-distance bus services",
                            location: "Bus station at terminal exit"
                        },
                        {
                            type: "Metro",
                            details: "Delhi Metro services to various parts of the city",
                            location: "Metro station adjacent to terminal"
                        },
                        {
                            type: "App-Based Cabs",
                            services: [
                                {
                                    name: "Uber",
                                    url: "https://www.uber.com/global/en/airports/del/",
                                    logo_url: "https://d1a3f4spazzrp4.cloudfront.net/uber-com/universal/20px-37d92b9ad2f4f057e52486ecbf01a5e1.svg"
                                },
                                {
                                    name: "Ola",
                                    url: "https://www.olacabs.com",
                                    logo_url: "https://www.olacabs.com/webstatic/img/ola-logo.svg"
                                }
                            ],
                            details: "Available for pick-up and drop-off at designated areas",
                            location: "Various pick-up points as specified by the app"
                        }
                    ],
                    parking: {
                        short_term: {
                            location: "Near Terminal 3",
                            details: "Short-term parking available for up to 24 hours",
                            rates: "150 INR per hour"
                        },
                        long_term: {
                            location: "Near Terminal 3",
                            details: "Long-term parking available for more than 24 hours",
                            rates: "500 INR per day"
                        }
                    },
                    wifi: {
                        availability: "Free",
                        details: "Free WiFi is available throughout Terminal 3. Connect to the 'Delhi Airport Free WiFi' network and follow the instructions to get connected."
                    }
                }
            ],
            transportation: {
                to_and_from_airport: "https://www.newdelhiairport.in/transportation",
                cab_services: "https://www.newdelhiairport.in/taxi",
                app_based_cabs: [
                    {
                        name: "Uber",
                        url: "https://www.uber.com/global/en/airports/del/",
                        logo_url: "https://d1a3f4spazzrp4.cloudfront.net/uber-com/universal/20px-37d92b9ad2f4f057e52486ecbf01a5e1.svg"
                    },
                    {
                        name: "Ola",
                        url: "https://www.olacabs.com",
                        logo_url: "https://www.olacabs.com/webstatic/img/ola-logo.svg"
                    }
                ]
            },
            contact: {
                email: ["info@newdelhiairport.in", "feedback@newdelhiairport.in"],
                phone: ["+91 124 337 6000", "+91 11 4719 7000"],
                helpline: ["+91 124 479 7300"],
                police: ["100"]
            }
        },
        {
            airport: {
                id: "LHR",
                country_id: "GB",
                city_id: "LON",
                iata_code: "LHR",
                icao_code: "EGLL",
                name: "Heathrow Airport",
                location: "London, United Kingdom",
                website: "https://www.heathrow.com"
            },
            flights: {
                arrival: "https://www.heathrow.com/arrivals",
                departure: "https://www.heathrow.com/departures"
            },
            terminals: [
                {
                    name: "Terminal 2",
                    details: "International and domestic flights",
                    lat_long: {
                        latitude: 51.4706,
                        longitude: -0.461941
                    },
                    transportation: [
                        {
                            type: "Taxi",
                            details: "Prepaid taxi services available",
                            location: "Outside Arrival Hall"
                        },
                        {
                            type: "Bus",
                            details: "Local and long-distance bus services",
                            location: "Bus station at terminal exit"
                        },
                        {
                            type: "Train",
                            details: "Heathrow Express and TfL Rail services to central London",
                            location: "Train station adjacent to terminal"
                        },
                        {
                            type: "App-Based Cabs",
                            services: [
                                {
                                    name: "Uber",
                                    url: "https://www.uber.com/global/en/airports/lhr/",
                                    logo_url: "https://d1a3f4spazzrp4.cloudfront.net/uber-com/universal/20px-37d92b9ad2f4f057e52486ecbf01a5e1.svg"
                                },
                                {
                                    name: "Ola",
                                    url: "https://www.olacabs.com",
                                    logo_url: "https://www.olacabs.com/webstatic/img/ola-logo.svg"
                                }
                            ],
                            details: "Available for pick-up and drop-off at designated areas",
                            location: "Various pick-up points as specified by the app"
                        }
                    ],
                    parking: {
                        short_term: {
                            location: "Near Terminal 2",
                            details: "Short-term parking available for up to 24 hours",
                            rates: "6 GBP per hour"
                        },
                        long_term: {
                            location: "Near Terminal 2",
                            details: "Long-term parking available for more than 24 hours",
                            rates: "35 GBP per day"
                        }
                    },
                    wifi: {
                        availability: "Free",
                        details: "Free WiFi is available throughout Terminal 2. Connect to the 'Heathrow WiFi' network and follow the instructions to get connected."
                    }
                },
                {
                    name: "Terminal 3",
                    details: "International and domestic flights",
                    lat_long: {
                        latitude: 51.4713,
                        longitude: -0.455333
                    },
                    transportation: [
                        {
                            type: "Taxi",
                            details: "Prepaid taxi services available",
                            location: "Outside Arrival Hall"
                        },
                        {
                            type: "Bus",
                            details: "Local and long-distance bus services",
                            location: "Bus station at terminal exit"
                        },
                        {
                            type: "Train",
                            details: "Heathrow Express and TfL Rail services to central London",
                            location: "Train station adjacent to terminal"
                        },
                        {
                            type: "App-Based Cabs",
                            services: [
                                {
                                    name: "Uber",
                                    url: "https://www.uber.com/global/en/airports/lhr/",
                                    logo_url: "https://d1a3f4spazzrp4.cloudfront.net/uber-com/universal/20px-37d92b9ad2f4f057e52486ecbf01a5e1.svg"
                                },
                                {
                                    name: "Ola",
                                    url: "https://www.olacabs.com",
                                    logo_url: "https://www.olacabs.com/webstatic/img/ola-logo.svg"
                                }
                            ],
                            details: "Available for pick-up and drop-off at designated areas",
                            location: "Various pick-up points as specified by the app"
                        }
                    ],
                    parking: {
                        short_term: {
                            location: "Near Terminal 3",
                            details: "Short-term parking available for up to 24 hours",
                            rates: "6 GBP per hour"
                        },
                        long_term: {
                            location: "Near Terminal 3",
                            details: "Long-term parking available for more than 24 hours",
                            rates: "35 GBP per day"
                        }
                    },
                    wifi: {
                        availability: "Free",
                        details: "Free WiFi is available throughout Terminal 3. Connect to the 'Heathrow WiFi' network and follow the instructions to get connected."
                    }
                },
                {
                    name: "Terminal 4",
                    details: "International and domestic flights",
                    lat_long: {
                        latitude: 51.4599,
                        longitude: -0.445275
                    },
                    transportation: [
                        {
                            type: "Taxi",
                            details: "Prepaid taxi services available",
                            location: "Outside Arrival Hall"
                        },
                        {
                            type: "Bus",
                            details: "Local and long-distance bus services",
                            location: "Bus station at terminal exit"
                        },
                        {
                            type: "Train",
                            details: "Heathrow Express and TfL Rail services to central London",
                            location: "Train station adjacent to terminal"
                        },
                        {
                            type: "App-Based Cabs",
                            services: [
                                {
                                    name: "Uber",
                                    url: "https://www.uber.com/global/en/airports/lhr/",
                                    logo_url: "https://d1a3f4spazzrp4.cloudfront.net/uber-com/universal/20px-37d92b9ad2f4f057e52486ecbf01a5e1.svg"
                                },
                                {
                                    name: "Ola",
                                    url: "https://www.olacabs.com",
                                    logo_url: "https://www.olacabs.com/webstatic/img/ola-logo.svg"
                                }
                            ],
                            details: "Available for pick-up and drop-off at designated areas",
                            location: "Various pick-up points as specified by the app"
                        }
                    ],
                    parking: {
                        short_term: {
                            location: "Near Terminal 4",
                            details: "Short-term parking available for up to 24 hours",
                            rates: "6 GBP per hour"
                        },
                        long_term: {
                            location: "Near Terminal 4",
                            details: "Long-term parking available for more than 24 hours",
                            rates: "35 GBP per day"
                        }
                    },
                    wifi: {
                        availability: "Free",
                        details: "Free WiFi is available throughout Terminal 4. Connect to the 'Heathrow WiFi' network and follow the instructions to get connected."
                    }
                },
                {
                    name: "Terminal 5",
                    details: "International and domestic flights",
                    lat_long: {
                        latitude: 51.470022,
                        longitude: -0.487432
                    },
                    transportation: [
                        {
                            type: "Taxi",
                            details: "Prepaid taxi services available",
                            location: "Outside Arrival Hall"
                        },
                        {
                            type: "Bus",
                            details: "Local and long-distance bus services",
                            location: "Bus station at terminal exit"
                        },
                        {
                            type: "Train",
                            details: "Heathrow Express and TfL Rail services to central London",
                            location: "Train station adjacent to terminal"
                        },
                        {
                            type: "App-Based Cabs",
                            services: [
                                {
                                    name: "Uber",
                                    url: "https://www.uber.com/global/en/airports/lhr/",
                                    logo_url: "https://d1a3f4spazzrp4.cloudfront.net/uber-com/universal/20px-37d92b9ad2f4f057e52486ecbf01a5e1.svg"
                                },
                                {
                                    name: "Ola",
                                    url: "https://www.olacabs.com",
                                    logo_url: "https://www.olacabs.com/webstatic/img/ola-logo.svg"
                                }
                            ],
                            details: "Available for pick-up and drop-off at designated areas",
                            location: "Various pick-up points as specified by the app"
                        }
                    ],
                    parking: {
                        short_term: {
                            location: "Near Terminal 5",
                            details: "Short-term parking available for up to 24 hours",
                            rates: "6 GBP per hour"
                        },
                        long_term: {
                            location: "Near Terminal 5",
                            details: "Long-term parking available for more than 24 hours",
                            rates: "35 GBP per day"
                        }
                    },
                    wifi: {
                        availability: "Free",
                        details: "Free WiFi is available throughout Terminal 5. Connect to the 'Heathrow WiFi' network and follow the instructions to get connected."
                    }
                }
            ],
            transportation: {
                to_and_from_airport: "https://www.heathrow.com/transport-and-directions",
                cab_services: "https://www.heathrow.com/taxis",
                app_based_cabs: [
                    {
                        name: "Uber",
                        url: "https://www.uber.com/global/en/airports/lhr/",
                        logo_url: "https://d1a3f4spazzrp4.cloudfront.net/uber-com/universal/20px-37d92b9ad2f4f057e52486ecbf01a5e1.svg"
                    },
                    {
                        name: "Ola",
                        url: "https://www.olacabs.com",
                        logo_url: "https://www.olacabs.com/webstatic/img/ola-logo.svg"
                    }
                ]
            },
            contact: {
                email: ["info@heathrow.com", "customer.relations@heathrow.com"],
                phone: ["+44 (0) 844 335 1801"],
                police: ["999"]
            }
        },

    ]

    try {
        await Airport.insertMany(airportsData);
        console.log('Data seeded successfully');
    } catch (err) {
        console.error('Error seeding data:', err);
    }

    mongoose.connection.close();
};

seedAirports();
