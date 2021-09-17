'use strict';
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/conectDB');
const bcrypt = require("bcrypt")

class Buyer extends Model {
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
Buyer.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  role: DataTypes.STRING,
  phone: DataTypes.INTEGER,
  registrationDate: DataTypes.DATE,
  review: DataTypes.INTEGER,
  wallet: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Buyer',
});

module.exports = Buyer;
