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
        allowNull: false,
        type: Sequelize.INTEGER
      },
      NomOuvrier: {
        allowNull: false,
        type: Sequelize.STRING
      },
      PrenomOuvrier: {
        allowNull: false,
        type: Sequelize.STRING
      },
      EmailOuvrier: {
        allowNull: false,
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