'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doctors', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
      },
      CRM: {
        type: Sequelize.STRING(7),
        allowNull: false,
      },
      phone: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },

      cell: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },

      CEP: {
        type: Sequelize.STRING(9),
        allowNull: false,
      },

      address: {
        type: Sequelize.STRING(),
        allowNull: false,
      },

      complement: {
        type: Sequelize.STRING(),
        allowNull: false,
      },

      district: {
        type: Sequelize.STRING(),
        allowNull: false,
      },

      locality: {
        type: Sequelize.STRING(),
        allowNull: false,
      },

      state: {
        type: Sequelize.STRING(),
        allowNull: false,
      },

      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('doctors');
  },
};
