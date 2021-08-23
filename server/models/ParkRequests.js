const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const ParkRequests = sequelize.define("ParkRequests", {
        parkname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address_line1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address_line2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image1: {
            type: DataTypes.STRING,
        },
        image2: {
            type: DataTypes.STRING,
        },
        image3: {
            type: DataTypes.STRING,
        },
        // email: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // password: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
       
    });

    return ParkRequests;
};