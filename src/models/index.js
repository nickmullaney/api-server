`use strict`;

const { Sequelize, DataTypes } = require('sequelize');
const recipe = require('./recipe');

// will make dynamic for testing environment.
//  known bug(double colons might not work for everyone, use single colon if thats the case, sqlite:memory, if that is the case)
const DATABASE_URL = process.env.DATABASE_URL === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

//database singleton
const SequelizeDatabase = new Sequelize(DATABASE_URL);

//create our working aod connected customer database model
const recipeModel = recipe(SequelizeDatabase, DataTypes);

module.exports = {
SequelizeDatabase,
recipeModel,
};