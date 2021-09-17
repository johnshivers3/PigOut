'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {      id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
    userId: DataTypes.INTEGER,
    businessId: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    answer: DataTypes.STRING,
    draft: DataTypes.BOOLEAN
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey:"userId"});
    Review.belongsTo(models.Business, { targetKey: 'yelpId', foreignKey:"businessId"});

  };
  return Review;
};
