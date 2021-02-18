'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.bulkInsert(
      'Teams',
      [
        {
          firstname: 'Manuel',
          lastname: 'Martinez',
          title: 'Desarrollaador Full Stack',
          description: 'Desarrollo DEVKINGOS',
          photo: 'NODE JS',
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date()
        }
      ],
      {}
    ),
  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Teams', null, {})
}