'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EQUIPEMENTS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.EQUIPEMENTS.belongsTo(models.CHANTIERS ,{
         foreignkey: {
           allowNull:false
         }
      });
    }
  };
  EQUIPEMENTS.init({
    idEQUIPEMENTS: DataTypes.INTEGER,
    Libelle: DataTypes.STRING,
    Prix: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EQUIPEMENTS',
  });
  return EQUIPEMENTS;
};