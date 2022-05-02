'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'doctors',
      [
        {
          id: '18d94a23-6fde-45a4-b4c6-64cb1a26e1e6',
          name: 'Alexandre Olivera',
          CRM: '1111111',
          phone: 3199998888,
          cell: 319999888,
          CEP: '32185-310',
          address: 'Rua do Goiabão',
          complement: '',
          district: 'Bom Jesus',
          locality: 'Contagem',
          state: 'MG',
          createdAt: new Date(),
        },
        {
          id: 'f12b4456-5255-4081-90ed-1c7ddfe69338',
          name: 'João Paulo',
          CRM: '222222',
          phone: 3199998888,
          cell: 319999888,
          CEP: '31255-190',
          address: 'Rua Estoril',
          complement: '',
          district: 'São Francisco',
          locality: 'Belo Horizonte',
          state: 'MG',
          createdAt: new Date(),
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
    await queryInterface.bulkDelete('doctors', null, {});
  },
};
