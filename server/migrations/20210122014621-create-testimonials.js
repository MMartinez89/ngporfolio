'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Testimonials', {
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
            testimonials: {
                type: Sequelize.STRING(1000),
                allowNull: true,
            },
            workPlace: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
           sr: {
               type: Sequelize.STRING(50),
                allowNull: false,
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
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Testimonials');
    }
};