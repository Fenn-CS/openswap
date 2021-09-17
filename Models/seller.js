'use strict';
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/conectDB');
const bcrypt = require("bcrypt")

module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Seller.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    cash: DataTypes.NUMBER,
    phone: DataTypes.NUMBER,
    registrationDate: DataTypes.DATE,
    rating: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Seller',
  });
  return Seller;
};