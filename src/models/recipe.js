`use strict`;

module.exports = (SequelizeDatabase, DataTypes) => {
  //Note that recipes WILL BE the name of the table created, pluralized
  // Each property: food, ingredient, vegetarian corresponds to a column in the database
  return SequelizeDatabase.define('recipes', {
    recipe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vegetarian: {
      type: DataTypes.BOOL,
      allowNull: true
    }
  })
};