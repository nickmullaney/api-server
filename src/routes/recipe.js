`use strict`;

const express = require('express');
const router = express.Router();
const { recipeModel } = require('..models/');

router.get('/recipe', async (req, res, next) => {
  let recipes = await recipeModel.findAll();

  res.status(200).send(recipes);
});

router.get('/recipe/:id', async (req, res, next) => {
  // where clause useful for update.  can also use findByPK()
  let singleRecipe = await recipeModel.findAll({where: {id: req.params.id}});

  res.status(200).send(singleRecipe);
});

router.post('/recipe', async (req, res, next) => {
  let newRecipe = await recipeModel.create(req.body);
  res.status(200).send(newRecipe);
});

module.exports =  router;