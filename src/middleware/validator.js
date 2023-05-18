'use strict';

module.exports = (req, res, next) => {
  let recipe = req.query.recipe;
  if(!recipe){
    next('Recipe is missing');
  }
  next();
};