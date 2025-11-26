import { DataTypes, Model } from "sequelize";
import db from "../database/connection.js";

class Persona extends Model {}

Persona.init(
  {
    dni: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: "El DNI no puede estar vacío" },
      }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "El nombre es obligatorio" },
        len: { args: [2, 50], msg: "El nombre debe tener entre 2 y 50 caracteres" },
      },
    },
    clave: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "La clave no puede estar vacía" },
        len: { args: [4, 100], msg: "La clave debe tener al menos 4 caracteres" },
      },
    },
    tfno: DataTypes.STRING, //Campo sin validaciones.
    edad: {
      type: DataTypes.INTEGER,
      validate: { min: 0, max: 150 }
    },
},
  {
    sequelize: db,
    tableName: "personas",
    modelName: "Persona",
    timestamps: false,
  }
);

export default Persona;
