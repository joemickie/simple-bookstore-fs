// const autobotService = require('../services/autobotService');

// async function getAutobots(req, res) {
//   try {
//     const autobots = await autobotService.getAutobots();
//     res.json(autobots);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch autobots' });
//   }
// }

// module.exports = { getAutobots };


// services/autobotService.js
const Autobot = require('../models/Autobot');

async function getAutobots() {
  try {
    console.log('Attempting to fetch autobots from the database...');
    const autobots = await Autobot.findAll();
    console.log('Autobots fetched successfully:', autobots);
    return autobots;
  } catch (error) {
    console.error('Error fetching autobots from database:', error);
    throw error;
  }
}

module.exports = { getAutobots };