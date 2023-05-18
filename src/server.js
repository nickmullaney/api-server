'use strict';

// Import required modules
const express = require('express');
const cors = require('cors');
const recipeRouter = require('./routes/recipe');
const logger = require('./middleware/logger');

// Create an instance of Express
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse JSON in the request body
app.use(express.json());

// Register the recipe router middleware
app.use(recipeRouter);

// Register the logger middleware
app.use(logger);

// Define a route handler for the root URL
app.get('/', (req, res, next) => {
  res.status(200).send('Proof of life');
});

// Function to start the server
const start = (port) => {
  app.listen(port, () => console.log('Server running on', port));
};

// Export the app and start functions
module.exports = {
  app,
  start
};
