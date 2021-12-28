'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OUVRIERs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idOUVRIERS: {
        type: Sequelize.INTEGER
      },
      NomOuvrier: {
        type: Sequelize.STRING
      },
      PrenomOuvrier: {
        type: Sequelize.STRING
      },
      EmailOuvrier: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OUVRIERs');
  }
};