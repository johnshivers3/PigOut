"use strict";
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
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
