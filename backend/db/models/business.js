"use strict";
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define(
    "Business",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      yelpId: DataTypes.STRING,
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
    Business.hasMany(models.CheckIns, { foreignKey: "businessId" });
    Business.hasMany(models.Collection, { foreignKey: "businessId" });
    Business.hasMany(models.Review, { foreignKey: "businessId" });
    Business.hasMany(models.SavedBusiness, { foreignKey: "businessId" });
  };
  return Business;
};
