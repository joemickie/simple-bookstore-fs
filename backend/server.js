// const app = require('./app');
// require('dotenv').config();

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const autobotService = require('./services/autobotService');

const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

  // Seed the database
  await autobotService.createAutobot();
});
