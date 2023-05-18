`use strict`;

const express = require('express');
const router = express.Router();
const { recipeModel } = require('../models/index');
const validator = require('../middleware/validator');

router.get('/recipe', async (req, res, next) => {
  try {
    let recipes = await recipeModel.findAll();
    res.status(200).send(recipes);
  }
  catch (e) {
    next(e);
  }
});

router.get('/recipe/:id', async (req, res, next) => {
  // where clause useful for update.  can also use findByPK()
  console.log('Hello');
 let id =  parseInt(req.params.id);
  try { 
    console.log('heres my id ',id);
    let singleRecipe = await recipeModel.findAll({ where: { id } });
    res.status(200).send(singleRecipe);
  }
  catch (e) {
    next(e);
  }
});

router.post('/recipe', async (req, res, next) => {
  let newRecipe = await recipeModel.create(req.body);
  res.status(200).json(newRecipe);
});

router.delete('/recipe/:id', async (req, res, next) => {
  try {
    let deleteRecipe = await recipeModel.destroy({ where: { id: req.params.id } });
    res.status(200).json(deleteRecipe);
  }
  catch (e) {
    next(e);
  }
});

router.put('/recipe/:id', async (req, res, next) => {
  
  try {
    let updatedRecipe = await recipeModel.update(req.body, { where: { id: req.params.id } });
    res.status(200).send(updatedRecipe);
  } catch (e) {
    next(e)
  }
});

module.exports = router;