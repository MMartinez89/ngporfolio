'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      lastname: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      photo: {
        allowNull: true,
        type: Sequelize.STRING(255)
      },
      //   UserId: {
      //     allowNull: false,
      //     type: Sequelize.INTEGER
      //   },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Teams')
  }
}