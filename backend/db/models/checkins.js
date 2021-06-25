"use strict";
module.exports = (sequelize, DataTypes) => {
  const CheckIns = sequelize.define(
    "CheckIns",
    {
      userId: DataTypes.INTEGER,
      businessId: DataTypes.STRING,
    },
    {}
  );
  CheckIns.associate = function (models) {
    CheckIns.belongsTo(models.User, { foreignKey: "userId" });
    CheckIns.belongsTo(models.Business, { foreignKey: "businessId" });
  };
  return CheckIns;
};
