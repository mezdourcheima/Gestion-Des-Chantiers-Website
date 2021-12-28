'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CHANTIERS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.CHANTIERS.hasMany(models.TACHES);
      models.CHANTIERS.hasMany(models.EQUIPEMENTS);
      models.CHANTIERS.hasMany(models.OUVRIERS);

    }
  };
  CHANTIERS.init({
    idCHANTIERS: DataTypes.INTEGER,
    Responsable: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CHANTIERS',
  });
  return CHANTIERS;
};