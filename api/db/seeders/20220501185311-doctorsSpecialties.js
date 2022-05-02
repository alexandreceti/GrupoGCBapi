'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'doctorSpecialties',
      [
        {
          doctorId: '18d94a23-6fde-45a4-b4c6-64cb1a26e1e6',
          specialtyId: '2fce1111-25ea-471f-9995-718a06501383',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doctorId: '18d94a23-6fde-45a4-b4c6-64cb1a26e1e6',
          specialtyId: 'e244581c-6523-4411-8bce-6d20424f5961',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doctorId: 'f12b4456-5255-4081-90ed-1c7ddfe69338',
          specialtyId: '32eaea6d-a885-41c9-a2eb-569955d21568',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doctorId: 'f12b4456-5255-4081-90ed-1c7ddfe69338',
          specialtyId: '70af27b2-9046-4c34-bbae-124039fe6905',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doctorId: 'f12b4456-5255-4081-90ed-1c7ddfe69338',
          specialtyId: 'ed77cdab-4f3b-40f9-9b85-9ea526306c2c',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('doctorSpecialties', null, {});
  },
};
