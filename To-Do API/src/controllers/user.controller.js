import User from "../models/users.model.js";
import { Op } from "sequelize";
import generateToken from "./utils/generateToken.js";

export const GetAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};

export const GetUseById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  res.status(200).json(user);
};

export const GetUserByUsername = async (req, res) => {
  const { name } = req.params;
  const users = await User.findAll({
    where: {
      name: {
        [Op.startsWith]: name,
      },
    },
  });
  res.status(200).json(users);
};

export const RegisterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
    });
    res.status(201).json({
      id: newUser.id,
    });
  } catch (error) {
    res.status(400).json({
      response: "Error",
      message: error.errors[0].message,
    });
  }
};

export const LoginUser = async (req, res) => {
  try {
    const { password, email } = req.body;
    const userLogin = await User.findOne({
      where: {
        [Op.and]: [{ email: email }, { password: password }],
      },
    });

    if(!userLogin){
      return res.json({message: "mohay"})
    }

    const payLoad = { id: userLogin.id, email: userLogin.email };
    const token = generateToken(payLoad);
    console.log(token);
    res.status(201).json({ user: userLogin, token: token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ Error: error });
  }
};
