'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TACHES extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.TACHES.belongsTo(models.CHANTIERS , {
        foreignkey:{
          allowNull:false
        }

      });
    }
  };
  TACHES.init({
    idTACHES: DataTypes.INTEGER,
    DureeTache: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TACHES',
  });
  return TACHES;
};