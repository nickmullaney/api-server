'use strict';

module.exports = (req, res, next) => {
  let food = req.query.food;
  if(!food){

    next('Food parameter is missing');
    // Longer way
    // throw new Error('Name parameter is missing');
    // error.status = 400;
    // return next(error);

    // dont need return, can just call next
  }
  next();
};