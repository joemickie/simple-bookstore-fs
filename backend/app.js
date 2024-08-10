const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const cors = require('cors');
const sequelize = require('./config/config');

const app = express();
app.use(bodyParser.json());

// Enable CORS for all origins
app.use(cors());

app.use('/api', apiRoutes);

// Database connection
sequelize.sync().then(() => console.log('Database connected successfully'));

module.exports = app;
