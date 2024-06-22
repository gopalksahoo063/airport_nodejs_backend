const express = require('express');
const connectDB = require('./config/db');
const airportRoutes = require('./routes/airportRoutes');

require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', airportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
