"use strict";
module.exports = (sequelize, DataTypes) => {
  const SavedBusiness = sequelize.define(
    "SavedBusiness",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: DataTypes.INTEGER,
      businessId: DataTypes.STRING,
    },
    {}
  );
  SavedBusiness.associate = function (models) {
    SavedBusiness.belongsTo(models.User, { foreignKey: "userId" });
    SavedBusiness.belongsTo(models.Business, { targetKey: 'yelpId',foreignKey: "businessId" });
  };
  return SavedBusiness;
};
