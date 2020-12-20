'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
    up: async(queryInterface, Sequelize) => await queryInterface.bulkInsert('Roles', [{
        rolename: 'Administrador',
        description: 'Administrador del Sistema',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    }, {
        rolename: 'Member',
        description: 'Miembro Basico del Sistema',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    }], {}),
    down: async(queryInterface, Sequelize) => queryInterface.bulkDelete('Roles', null, {}),
};