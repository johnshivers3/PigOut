'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    businessId: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    answer: DataTypes.STRING,
    draft: DataTypes.BOOLEAN
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey:"userId"});
    Review.belongsTo(models.Business, {foreignKey:"businessId"});

  };
  return Review;
};
