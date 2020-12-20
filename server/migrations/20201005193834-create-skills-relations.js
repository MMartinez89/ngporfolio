'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addConstraint('Skills', {
                fields: ['ParentId'],
                type: 'foreign key',
                name: 'fk_Skills_ParentId',
                references: {
                    table: 'Skills', // name of Target model
                    field: 'id', // key in Target model that we're referencing
                },
            }),
            queryInterface.addConstraint('Skills', {
                fields: ['UserId'],
                type: 'foreign key',
                name: 'fk_Skills_UserId',
                references: {
                    table: 'Users', // name of Target model
                    field: 'id', // key in Target model that we're referencing
                },
            });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeConstraint('Skills', 'fk_Skills_ParentId'),
            queryInterface.removeConstraint('Skills', 'fk_Skills_UserId');
    },
};