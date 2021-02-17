'use strict';
//const bcrypt = require('bcryptjs');

module.exports = {
    up: async(queryInterface, Sequelize) => await queryInterface.bulkInsert('Team', [{
        firstname: 'Manuel',
        lastname: 'Martinez',
        title: 'Es buen estudiante',
        description: 'Mercado libre',
        img: 'Sr desarrollador full stack',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
    },],
     {}),
    down: async(queryInterface, Sequelize) => queryInterface.bulkDelete('Team', null, {}),
};