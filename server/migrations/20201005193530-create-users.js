'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
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
            email: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true,
                lowercase: true,
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            img: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            is_verified: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            reset_password_token: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            reset_password_expires: {
                type: Sequelize.DATE,
                allowNull: true,
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
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    }
};