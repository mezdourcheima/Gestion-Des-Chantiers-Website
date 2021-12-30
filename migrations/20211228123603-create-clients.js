'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CLIENTs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCLIENTS: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      NomClient: {
        allowNull: false,
        type: Sequelize.STRING
      },
      PrenomCL: {
        allowNull: false,
        type: Sequelize.STRING
      },
      EmailCL: {
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
    await queryInterface.dropTable('CLIENTs');
  }
};