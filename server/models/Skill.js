"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Skill extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // M:1
            Skill.belongsTo(models.Skill, {
                foreignKey: "ParentId",
                as: "parent",

            });
            // M:1
            Skill.belongsTo(models.User, {
                foreignKey: "UserId",
            });
        }
    }
    Skill.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING(100),
        },
        ParentId: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        UserId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: "Skill",
    });
    return Skill;
};