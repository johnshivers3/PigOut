"use strict";
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define(
    "Business",
    {
      ownerId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zipCode: DataTypes.STRING,
      lat: DataTypes.DECIMAL,
      lng: DataTypes.DECIMAL,
      categoryId: DataTypes.INTEGER,
      image: DataTypes.TEXT,
    },
    {}
  );
  Business.associate = function (models) {
    Business.belongsTo(models.User, { foreignKey: "ownerId" });
    Business.belongsTo(models.Category, { foreignKey: "categoryId" });
  };
  return Business;
};
