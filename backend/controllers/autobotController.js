const Autobot = require('../models/Autobot');
const autobotService = require('../services/autobotService');

async function getAutobots(req, res) {
  const autobots = await Autobot.findAll({ limit: 10 });
  res.json(autobots);
}

module.exports = { getAutobots };
