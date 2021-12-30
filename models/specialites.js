'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SPECIALITES extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.SPECIALITES.belongsTo(models.CHANTIERS , {
        foreignkey:{
          allowNull:false
        }

      });
    }
  };
  SPECIALITES.init({
    idSPECIALITES: DataTypes.INTEGER,
    NomSpecialite: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SPECIALITES',
  });
  return SPECIALITES;
};