'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Skills', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING(100)
            },
            ParentId: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            UserId: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            active: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
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
        await queryInterface.dropTable('Skills');
    }
};