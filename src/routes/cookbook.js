'use strict';

// Import required modules
const express = require('express');
const router = express.Router();
const { cookbook, recipe } = require('../models');
// const validator = require('../middleware/validator');

// Route to get all cookbooks
router.get('/cookbook', async (req, res, next) => {
  try {
    // Retrieve all cookbooks from the database
    let cookbooks = await cookbook.read();
    // Send the retrieved cookbooks as the response
    res.status(200).send(cookbooks);
  }
  catch (e) {
    // Pass any errors to the error handling middleware
    next(e);
  }
});

// Route to get a single cookbook by ID
router.get('/cookbook/:id', async (req, res, next) => {
  // Parse the ID parameter from the request
  let id = parseInt(req.params.id);
  try {
    console.log('heres my id ', id);
    // Find a single cookbook with the given ID in the database
    let singleCookbook = await cookbook.findAll({ where: { id } });
    // Send the retrieved cookbook as the response
    res.status(200).send(singleCookbook);
  }
  catch (e) {
    // Pass any errors to the error handling middleware
    next(e);
  }
});

router.get('/cookbookWithRecipe', async (req, res, next) =>{
  let cookbooks = await cookbook.findAll({include: {model: recipe}});
  res.status(200).send(cookbooks);
});

router.get('/cookbookWithSingleRecipe', async (req, res, next) =>{
  let cookbooks = await cookbook.findAll({
    include: {model: recipe},
    where: {id: req.params.id},
  });
  res.status(200).send(cookbooks);
});

// Route to create a new cookbook
router.post('/cookbook', async (req, res, next) => {
  // Create a new cookbook using the request body data
  let newCookbook = await cookbook.create(req.body);
  // Send the newly created cookbook as the response
  res.status(200).json(newCookbook);
});

// Route to delete a cookbook by ID
router.delete('/cookbook/:id', async (req, res, next) => {
  let id = parseInt(req.params.id);
  try {
    // Delete a cookbook with the given ID from the database
    let deleteCookbook = await cookbook.read({ where: id });

    await cookbook.delete({ where: { id } });
    // Send the number of deleted cookbooks as the response
    res.status(200).json(deleteCookbook);
  }
  catch (e) {
    // Pass any errors to the error handling middleware
    next(e);
  }
});

// Route to update a cookbook by ID
router.put('/cookbook/:id', async (req, res, next) => {
  let id = parseInt(req.params.id);
  try {
    await cookbook.update(req.body, { where: { id } });
    // Update a cookbook with the given ID in the database using the request body data
    let updatedCookbook = await cookbook.update(req.body, { where: { id } });
    // Send the updated cookbook as the response
    res.status(200).send(updatedCookbook);

  } catch (e) {
    // Pass any errors to the error handling middleware
    next(e);
  }
});

// Export the router module
module.exports = router;
