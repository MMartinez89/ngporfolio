'use strict';
module.exports = (sequelize, DataTypes) => {
    //1=ADMIN 2=CLIENTE 
    const validRoles = [1, 2]
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstname: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            lowercase: true,
            validate: {
                isEmail: true
            },
            unique: {
                args: true,
                msg: 'El email no esta disponible, elija otro!'
            }
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        is_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false
        },
        img: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        role: {
            type: DataTypes.INTEGER,
            values: validRoles,
            defaultValues: 2
        },
        reset_password_token: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        reset_password_expires: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: true,
            type: DataTypes.DATE,
        },
    }, {});
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};