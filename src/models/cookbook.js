`use strict`;

module.exports = (SequelizeDatabase, DataTypes) => {
  //Note that recipes WILL BE the name of the table created, pluralized
  // Each property: food, ingredient, vegetarian corresponds to a column in the database
  return SequelizeDatabase.define('cookbooks', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cuisine: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM,
      values: ["entree", "appetizer", "soup", "dessert", "breakfast", "lunch", "dinner", "salad", "bread"],
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};