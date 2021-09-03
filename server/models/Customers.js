const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define("Customers", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
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
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // img: {
    //     type: DataTypes.IMAGE,
    // },
  });

  
  return Customers;
};
