'use strict';
// const { v4: uuidv4 } = require('../../node_modules/uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('specialties', [
      {
        id: '28567aa7-af8b-414e-8b10-b28666ccc939',
        name: 'Alergologia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2fce1111-25ea-471f-9995-718a06501383',
        name: 'Angiologia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '32eaea6d-a885-41c9-a2eb-569955d21568',
        name: 'Buco maxilo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '335feb07-d8a5-4e78-b0cb-82522093ea94',
        name: 'Cardiologia clínca',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '6e1c0ec5-057a-49cd-86de-51f023a71fc6',
        name: 'Cardiologia infantil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '70af27b2-9046-4c34-bbae-124039fe6905',
        name: 'Cirurgia cabeça e pescoço',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'e244581c-6523-4411-8bce-6d20424f5961',
        name: 'Cirurgia cardíaca',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ed77cdab-4f3b-40f9-9b85-9ea526306c2c',
        name: 'Cirurgia de tórax',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('specialties', null, {});
  },
};
