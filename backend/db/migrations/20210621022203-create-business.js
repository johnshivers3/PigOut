"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Businesses", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      yelpId: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      ownerId: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      address: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      city: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      state: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      zipCode: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      lat: {
        allowNull: true,
        type: Sequelize.DECIMAL,
      },
      lng: {
        allowNull: true,
        type: Sequelize.DECIMAL,
      },
      categoryId: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      image: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Businesses");
  },
};
