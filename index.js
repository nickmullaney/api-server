`use strict`;
// *** Important*** 
require('dotenv').config();
const PORT = process.env.PORT || 3002;


// This pulls in index 
const { SequelizeDatabase } = require('./src/models');
const { start } = require('./src/server');

SequelizeDatabase.sync()
.then(() => {
  console.log('Successful Connection');
  //start server here
  start(PORT);
})
.catch(e => console.error(e));