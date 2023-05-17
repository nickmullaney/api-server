`use strict`;

const express = require('express');
const cors = require('cors');
const recipeRouter = require('./routes/recipe');

const app = express();
app.use(cors());
// otherwise you wont see json in the body of the request
app.use(express.json());
app.use(recipeRouter);
// TODO get this working

app.get('/', (req, res, next) => {
  res.status(200).send('Proof of life');
})

const start = (port) => {
  app.listen(port, () => console.log('Server running on ', port))
};

module.exports = {
  app,
  start
};
