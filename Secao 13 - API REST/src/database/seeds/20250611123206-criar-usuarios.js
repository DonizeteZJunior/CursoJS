'use strict';

const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    return queryInterface.bulkInsert(
      'users',[
        {
          nome: 'Celso',
          email: 'celso@gmail.com',
          password_hash: await bcryptjs.hash('123456',8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Celso 2',
          email: 'celso2@gmail.com',
          password_hash: await bcryptjs.hash('524587',8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Celso 3',
          email: 'celso3@gmail.com',
          password_hash: await bcryptjs.hash('134679',8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],{});
  },

  async down () {}
};
