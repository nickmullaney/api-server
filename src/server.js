`use strict`;

const express = require('express');
const cors = require('cors');
const customerRouter =  require('./routes/customer');

const app = express();
app.use(cors());
// otherwise you wont see json in the body of the request
app.use(express.json());
app.use(customerRouter);
// TODO get this working
const customerRouter = require('./routes/customer');
const { port } = require('pg/lib/defaults');

app.get('/', (req, res, next) => {
  res.status(200).send('Proof of life');
})



const start = (port) => { app.listen(port, () => console.log('Server running on ', port)) };

module.exports = {
  app,
  start
};
