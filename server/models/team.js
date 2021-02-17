'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Team extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Team.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        firstname: {
            type: DataTypes.STRING(80)
        },
        lastname: {
            type: DataTypes.STRING(80)
        },
        title: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING(2000),
            allowNull: true,
        },
        img: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'Team',
    }, )
    return Team
}