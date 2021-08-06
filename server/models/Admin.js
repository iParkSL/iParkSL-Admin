const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("Admin", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Admin;
};