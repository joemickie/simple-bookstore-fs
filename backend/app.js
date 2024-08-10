const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const sequelize = require('./config/config');

const app = express();
app.use(bodyParser.json());

app.use('/api', apiRoutes);

// Database connection
sequelize.sync().then(() => console.log('Database connected successfully'));

module.exports = app;
