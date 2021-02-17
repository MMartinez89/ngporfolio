'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Team', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstname: {
                type: Sequelize.STRING(80)
            },
            lastname: {
                type: Sequelize.STRING(80)
            },
            title: {
              type: Sequelize.STRING(200)
           },
            description: {
              type: Sequelize.TEXT
            },
            img: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
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
              allowNull: true,
          },
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Team');
    }
};