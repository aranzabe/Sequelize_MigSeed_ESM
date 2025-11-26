'use strict';
const {genUsers} = require('../factories/user_factory.cjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // await queryInterface.bulkInsert('personas', [{
    //   dni: "100A",
    //   nombre: "Another persona",
    //   clave: "999",
    //   tfno: "99999",
    //   edad: 45
    //  }], {});
    const usuariosGenerados = await genUsers(4);
    await queryInterface.bulkInsert('personas', usuariosGenerados, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('personas', null, {});
  }
};
