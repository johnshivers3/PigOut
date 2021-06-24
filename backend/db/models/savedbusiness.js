"use strict";
module.exports = (sequelize, DataTypes) => {
  const SavedBusiness = sequelize.define(
    "SavedBusiness",
    {
      userId: DataTypes.INTEGER,
      businessId: DataTypes.STRING,
    },
    {}
  );
  SavedBusiness.associate = function (models) {
    SavedBusiness.belongsTo(models.User, { foreignKey: "userId" });
    SavedBusiness.belongsTo(models.Business, { foreignKey: "businessId" });
  };
  return SavedBusiness;
};
