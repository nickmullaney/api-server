'use strict';

// Load environment variables from .env file
require('dotenv').config();

// Set the port to the value from the environment variable or use 3002 as the default
const PORT = process.env.PORT || 3002;

// Import the SequelizeDatabase and start functions from their respective modules
const { SequelizeDatabase } = require('./src/models');
const { start } = require('./src/server');

// Sync the Sequelize models with the database
SequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection');
    // Start the server on the specified port
    start(PORT);
  })
  .catch(e => console.error(e));
