"use strict";
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define(
    "Collection",
    {      id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
      collectionName: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      businessId: DataTypes.INTEGER,
    },
    {}
  );
  Collection.associate = function (models) {
    Collection.belongsTo(models.User, { foreignKey: "userId" });
    Collection.belongsTo(models.Business, { targetKey: 'yelpId',foreignKey: "businessId" });
  };
  return Collection;
};
