import { DataTypes, Model } from "sequelize";
import db from "../database/connection.js";

class RolesAsignados extends Model {}

RolesAsignados.init(
  {
    idra: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    dni_persona: {
      type: DataTypes.STRING,
      references: { model: 'personas', key: 'dni' }
    },
    id_rol: {
      type: DataTypes.BIGINT,
      references: { model: 'roles', key: 'id' }
    }
  },
  {
    sequelize: db,
    tableName: "rolesasignados",
    modelName: "RolesAsignados",
    timestamps: false,
  }
);

export default RolesAsignados;
