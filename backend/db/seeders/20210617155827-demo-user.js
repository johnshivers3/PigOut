'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@pigout.herokuapp.com',
        username: 'Demo-Pig',
        hashedPassword: bcrypt.hashSync('password'),
        image: 'https://pig-out.s3.amazonaws.com/1624089713216.png'
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image: 'https://pig-out.s3.amazonaws.com/1624089713216.png'

      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image: 'https://pig-out.s3.amazonaws.com/1624089713216.png'

      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-Pig', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
