import { DataTypes, Model } from "sequelize";
import db from "../database/connection.js";

class Roles extends Model {}

Roles.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true },
    descripcion: DataTypes.STRING,
  },
  {
    sequelize: db,
    tableName: "roles",
    modelName: "Roles",
    timestamps: false,
  }
);

export default Roles;
