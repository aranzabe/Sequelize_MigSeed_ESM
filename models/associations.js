import Persona from "./Persona.js";
import Roles from "./Roles.js";
import RolesAsignados from "./RolesAsignados.js";


//Definimos las asociaciones en esta carpeta para evitar referencias en bucle.
Persona.hasMany(RolesAsignados, {
  as: "rolesAsignados",
  foreignKey: "dni_persona",
});

Roles.hasMany(RolesAsignados, {
  as: "rolesAsignados",
  foreignKey: "id_rol",
});

RolesAsignados.belongsTo(Persona, {
  as: "persona",
  foreignKey: "dni_persona",
});

RolesAsignados.belongsTo(Roles, {
  as: "rol",
  foreignKey: "id_rol",
});

export default { Persona, Roles, RolesAsignados };
