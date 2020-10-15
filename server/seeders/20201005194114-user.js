'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
    up: async(queryInterface, Sequelize) => await queryInterface.bulkInsert('Users', [{
        firstname: 'Juan',
        lastname: 'Valdés',
        email: 'idevkingos@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        is_verified: false,
    }, {
        firstname: 'Manuel',
        lastname: 'Martinez',
        email: 'mmartinez@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        is_verified: false,
    }], {}),
    down: async(queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};