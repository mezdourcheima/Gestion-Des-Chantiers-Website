'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OUVRIERS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.OUVRIERS.hasMany(models.SPECIALITES)
      models.OUVRIERS.belongsTo(models.CHANTIERS , {
        foreignkey:{
          allowNull:false
        }

      });
    }
  };
  OUVRIERS.init({
    idOUVRIERS: DataTypes.INTEGER,
    NomOuvrier: DataTypes.STRING,
    PrenomOuvrier: DataTypes.STRING,
    EmailOuvrier: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OUVRIERS',
  });
  return OUVRIERS;
};