"use strict";
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {      id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
      categoryName: DataTypes.STRING,
    },
    {}
  );
  Category.associate = function (models) {
    Category.hasMany(models.Business, {
      foreignKey: "categoryId",
      onDelete: "cascade",
      hooks: true,
    });
  };
  return Category;
};
