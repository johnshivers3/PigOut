"use strict";
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define(
    "Collection",
    {
      collectionName: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      businessId: DataTypes.STRING,
    },
    {}
  );
  Collection.associate = function (models) {
    Collection.belongsTo(models.User, { foreignKey: "userId" });
    Collection.belongsTo(models.Business, { foreignKey: "businessId" });
  };
  return Collection;
};
