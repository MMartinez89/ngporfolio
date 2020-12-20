'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
    up: async(queryInterface, Sequelize) => await queryInterface.bulkInsert('Users', [{
        firstname: 'Juan',
        lastname: 'Valdés',
        email: 'idevkingos@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        is_verified: false,
        reset_password_token: false,
        reset_password_expires: new Date(),
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    }, {
        firstname: 'Manuel',
        lastname: 'Martinez',
        email: 'mmartinez@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        is_verified: false,
        reset_password_token: false,
        reset_password_expires: new Date(),
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    }], {}),
    down: async(queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};