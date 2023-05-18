'use strict';

// Import required modules
const express = require('express');
const router = express.Router();
const { cookbook } = require('../models');
const validator = require('../middleware/validator');

// Route to get all recipes
router.get('/cookbook', async (req, res, next) => {
  try {
    // Retrieve all recipes from the database
    let cookbooks = await cookbook.read();
    // Send the retrieved recipes as the response
    res.status(200).send(cookbooks);
  }
  catch (e) {
    // Pass any errors to the error handling middleware
    next(e);
  }
});

// Route to get a single recipe by ID
router.get('/cookbook/:id', async (req, res, next) => {
  // Parse the ID parameter from the request
  let id = parseInt(req.params.id);
  try {
    console.log('heres my id ', id);
    // Find a single recipe with the given ID in the database
    let singleCookbook = await cookbook.findAll({ where: { id } });
    // Send the retrieved recipe as the response
    res.status(200).send(singleCookbook);
  }
  catch (e) {
    // Pass any errors to the error handling middleware
    next(e);
  }
});

// Route to create a new recipe
router.post('/cookbook', async (req, res, next) => {
  // Create a new recipe using the request body data
  let newCookbook = await cookbook.create(req.body);
  // Send the newly created recipe as the response
  res.status(200).json(newCookbook);
});

// Route to delete a recipe by ID
router.delete('/cookbook/:id', async (req, res, next) => {
  try {
    // Delete a recipe with the given ID from the database
    let deleteCookbook = await cookbook.findAll({ where: { id: req.params.id } });

    await cookbook.destroy({where: {id: req.params.id}});
    // Send the number of deleted recipes as the response
    res.status(200).json(deleteCookbook);
  }
  catch (e) {
    // Pass any errors to the error handling middleware
    next(e);
  }
});

// Route to update a recipe by ID
router.put('/cookbook/:id', async (req, res, next) => {
  try {
    await cookbook.update(req.body, { where: { id: req.params.id }});
    // Update a recipe with the given ID in the database using the request body data
    let updatedCookbook = await cookbook.update(req.body, { where: { id: req.params.id } });
    // Send the updated recipe as the response
    res.status(200).send(updatedCookbook);

  } catch (e) {
    // Pass any errors to the error handling middleware
    next(e);
  }
});

// Export the router module
module.exports = router;
