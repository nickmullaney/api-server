'use strict';

// Import required modules
const express = require('express');
const router = express.Router();
const { recipeModel } = require('../models/index');
const validator = require('../middleware/validator');

// Route to get all recipes
router.get('/recipe', async (req, res, next) => {
  try {
    // Retrieve all recipes from the database
    let recipes = await recipeModel.findAll();
    // Send the retrieved recipes as the response
    res.status(200).send(recipes);
  }
  catch (e) {
    // Pass any errors to the error handling middleware
    next(e);
  }
});

// Route to get a single recipe by ID
router.get('/recipe/:id', async (req, res, next) => {
  // Parse the ID parameter from the request
  let id = parseInt(req.params.id);
  try {
    console.log('heres my id ', id);
    // Find a single recipe with the given ID in the database
    let singleRecipe = await recipeModel.findAll({ where: { id } });
    // Send the retrieved recipe as the response
    res.status(200).send(singleRecipe);
  }
  catch (e) {
    // Pass any errors to the error handling middleware
    next(e);
  }
});

// Route to create a new recipe
router.post('/recipe', async (req, res, next) => {
  // Create a new recipe using the request body data
  let newRecipe = await recipeModel.create(req.body);
  // Send the newly created recipe as the response
  res.status(200).json(newRecipe);
});

// Route to delete a recipe by ID
router.delete('/recipe/:id', async (req, res, next) => {
  try {
    // Delete a recipe with the given ID from the database
    let deleteRecipe = await recipeModel.findAll({ where: { id: req.params.id } });

    await recipeModel.destroy({where: {id: req.params.id}});
    // Send the number of deleted recipes as the response
    res.status(200).json(deleteRecipe);
  }
  catch (e) {
    // Pass any errors to the error handling middleware
    next(e);
  }
});

// Route to update a recipe by ID
router.put('/recipe/:id', async (req, res, next) => {
  try {
    await recipeModel.update(req.body, { where: { id: req.params.id }});
    // Update a recipe with the given ID in the database using the request body data
    let updatedRecipe = await recipeModel.update(req.body, { where: { id: req.params.id } });
    // Send the updated recipe as the response
    res.status(200).send(updatedRecipe);

  } catch (e) {
    // Pass any errors to the error handling middleware
    next(e);
  }
});

// Export the router module
module.exports = router;
