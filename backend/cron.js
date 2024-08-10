const cron = require('node-cron');
const autobotService = require('./services/autobotService');

cron.schedule('0 0 * * *', async () => {
  await autobotService.createAutobotsInBatch();
  console.log('Autobots batch created successfully');
});

module.exports = cron;
