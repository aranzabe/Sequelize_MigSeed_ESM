'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rolesasignados', {
      idra: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dni_persona: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'personas'
          },
          key: 'dni'
        },
        allowNull: false,
        // onUpdate: 'CASCADE', // Opcional: Define qué sucede al actualizar/eliminar
        // onDelete: 'CASCADE'
      },
      id_rol: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'roles'
          },
          key: 'id'
        },
        allowNull: false
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('roles');
  }
};