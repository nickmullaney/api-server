`use strict`;

module.exports = (SequelizeDatabase, DataTypes) => {
  //Note that recipes WILL BE the name of the table created, pluralized
  // Each property: food, ingredient, vegetarian corresponds to a column in the database
  return SequelizeDatabase.define('recipes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    flavors: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cookbookId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  })
};