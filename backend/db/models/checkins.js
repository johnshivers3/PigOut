"use strict";
module.exports = (sequelize, DataTypes) => {
  const CheckIns = sequelize.define(
    "CheckIns",
    {      id: {
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
  CheckIns.associate = function (models) {
    CheckIns.belongsTo(models.User, { foreignKey: "userId" });
    CheckIns.belongsTo(models.Business, { targetKey: 'yelpId',foreignKey: "businessId" });
  };
  return CheckIns;
};
