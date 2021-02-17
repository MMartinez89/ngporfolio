'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Testimonials extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Testimonials.init({
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
        testimonials: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        workPlace: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
       sr: {
           type: DataTypes.STRING(50),
            allowNull: false,
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
        }
    }, {
        sequelize,
        modelName: 'Testimonials',
    }, )
    return Testimonials
}