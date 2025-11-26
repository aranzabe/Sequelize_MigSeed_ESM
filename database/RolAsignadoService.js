import Persona from "../models/Persona.js";
import RolesAsignados from "../models/RolesAsignados.js";
import Roles from "../models/Roles.js";

class RolAsignadoService {
  async getRolesAsignados() {
    return await RolesAsignados.findAll();
  }

  async getRolesAsignadosDNI(dni) {
    // const usuario = await Persona.findOne({
    //   where: { dni },
    //   include: [{ model: RolesAsignados, as: "rolesAsignados" }],
    // });

    const usuario = await Persona.findOne({
      where: { dni },
      include: [{
        model: RolesAsignados,
        as: "rolesAsignados",
        include: [{ model: Roles, as: "rol" }]
      }],
    });


    if (!usuario) throw new Error("Usuario no encontrado");
    return usuario;
  }

  async getRolesAsignadosDNITodos() {
    // const usuarios = await Persona.findAll({
    //   where: { dni },
    //   include: [{ model: RolesAsignados, as: "rolesAsignados" }],
    // });

    const usuarios = await Persona.findAll({
      include: [{
        model: RolesAsignados,
        as: "rolesAsignados",
        include: [{ model: Roles, as: "rol" }]
      }],
    });
    // console.log(usuarios);

    if (!usuarios) throw new Error("Usuario no encontrado");
    return usuarios;
  }
}

export default RolAsignadoService;
