'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      first_name : 'amey',
      last_name : 'khandalkar',
      bio : 'I am a new user to this application',
      createdAt : new Date(),
      updatedAt : new Date(),
      email : 'ameykhandalkar@gmail.com'
    }], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', [{
      first_name :'amey'
    }])
  }
};