const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const ReceivedPayments = sequelize.define("ReceivedPayments", {
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
    address_line1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_line2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phonenumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  });

  return ReceivedPayments;
};
