const { Sequelize, DataTypes, DATEONLY, ENUM } = require("sequelize");

`use strict`;

module.exports = (SequelizeDatabase, DataTypes) => {
  //Note that customers WILL BE the name of the table created, pluralized
  // Each property: name, age, pronouns corresponds to a column in the database
  return SequelizeDatabase.define('customers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pronouns: {
      type: DataTypes.ENUM,
      values: ['they/them', 'he/them','she/them', 'she/her', 'he/him', 'he/she', 'she/he'],
      allowNull: true
    }
  })
};