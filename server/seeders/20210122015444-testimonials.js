'use strict';
//const bcrypt = require('bcryptjs');

module.exports = {
    up: async(queryInterface, Sequelize) => await queryInterface.bulkInsert('Testimonials', [{
        firstname: 'Juan',
        lastname: 'Valdés',
        testimonials: 'Es buen estudiante',
        workPlace: 'Mercado libre',
        sr: 'Sr desarrollador full stack',
        createdAt: new Date(),
        updatedAt: new Date(),
    }, {
      firstname: 'Carlos',
      lastname: 'Gomez',
      testimonials: 'Muy flojo',
      workPlace: 'Globant',
      sr: 'Sr desarrollador backEnd',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {}),
    down: async(queryInterface, Sequelize) => queryInterface.bulkDelete('Testimonials', null, {}),
};