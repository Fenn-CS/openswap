'use strict';
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/conectDB');
const bcrypt = require("bcrypt")

class Seller extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
  validPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
};
Seller.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  role: DataTypes.STRING,
  wallet: DataTypes.INTEGER,
  phone: DataTypes.INTEGER,
  registrationDate: DataTypes.DATE,
  rating: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Seller',
});

module.exports = Seller;
