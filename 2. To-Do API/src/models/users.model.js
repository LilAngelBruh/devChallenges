import { DataTypes } from "sequelize";
import sequelize from "../app/conexion.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El nombre no puede estar vacío",
        },
        len: {
          args: [4, 50],
          msg: "El nombre debe tener entre 1 y 50 caracteres",
        },
      },
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: {
        args: true,
        msg: "El correo electrónico ya está en uso",
      },
      validate: {
        isEmail: {
          msg: "Debe ser un correo electrónico válido",
        },
        notEmpty: {
          msg: "El correo no puede estar vacío",
        },
      },
    },
    password: {
      type: DataTypes.STRING(25),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "La contraseña no puede estar vacía",
        },
        len: {
          args: [6, 25],
          msg: "La contraseña debe tener entre 6 y 25 caracteres",
        },
      },
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

export default User;
