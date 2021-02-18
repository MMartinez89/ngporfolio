'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    static associate(models) {}
  }
  Team.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      firstname: {
        allowNull: false,
        type: DataTypes.STRING(100)
      },
      lastname: {
        allowNull: false,
        type: DataTypes.STRING(100)
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING(100)
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING(255)
      },
      photo: {
        allowNull: true,
        type: DataTypes.STRING(255)
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
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'Team'
    }
  )
  return Team
}