`use strict`;

const { Sequelize, DataTypes } = require('sequelize');
const recipe = require('./recipe');

// will make dynamic for testing environment
const DATABASE_URL = process.env.DATABASE_URL;

//database singleton
const SequelizeDatabase = new Sequelize(DATABASE_URL);

//create our working aod connected customer database model
const recipeModel = recipe(SequelizeDatabase, DataTypes);

module.exports = {
SequelizeDatabase,
recipeModel,
};