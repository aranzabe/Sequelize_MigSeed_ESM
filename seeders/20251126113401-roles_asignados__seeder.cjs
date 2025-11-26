'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Obtener todos los roles de la tabla roles
    const roles = await queryInterface.sequelize.query(
      `SELECT id FROM roles;`
    );
    const roleIds = roles[0].map(r => r.id);

    // 2. Obtener todas las personas
    const personas = await queryInterface.sequelize.query(
      `SELECT dni FROM personas;`
    );
    const personaIds = personas[0].map(p => p.dni);

    // 3. Crear asignaciones aleatorias
    const asignaciones = personaIds.map(personaId => {
      const randomRoleId = roleIds[Math.floor(Math.random() * roleIds.length)];
      return {
        dni_persona: personaId,
        id_rol: randomRoleId,
        // createdAt: new Date(),
        // updatedAt: new Date()
      };
    });

    // 4. Insertar en la tabla intermedia
    await queryInterface.bulkInsert('rolesasignados', asignaciones, {});
  },

  async down(queryInterface, Sequelize) {
    // Borrar todas las asignaciones de la tabla intermedia
    await queryInterface.bulkDelete('rolesasignados', null, {});
  }
};
