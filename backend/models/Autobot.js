const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Autobot = sequelize.define('Autobot', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = Autobot;
