'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CLIENTS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CLIENTS.init({
    idCLIENTS: DataTypes.INTEGER,
    NomClient: DataTypes.STRING,
    PrenomCL: DataTypes.STRING,
    EmailCL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CLIENTS',
  });
  return CLIENTS;
};