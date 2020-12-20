'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
    up: async(queryInterface, Sequelize) => await queryInterface.bulkInsert('Skills', [{
        name: 'Frontend',
        ParentId: null,
        UserId: 1,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
    }, {
        name: 'React/redux',
        ParentId: 1,
        UserId: 1,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
    }], {}),
    down: async(queryInterface, Sequelize) => queryInterface.bulkDelete('Skills', null, {}),
};