'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // 1:M
            User.hasMany(models.Skill, {
                foreignKey: "UserId"
            })
        }
    }
    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            lowercase: true,
            trim: true,
            validate: {
                isEmail: true,
            },
            unique: {
                args: true,
                msg: 'El email no esta disponible, elija otro!',
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        is_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        reset_password_token: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        reset_password_expires: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },

    }, {
        sequelize,
        modelName: 'User',
    }, )
    return User
}