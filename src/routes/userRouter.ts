import express from "express";

import {
  createUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  postLogin,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", postLogin);

// Rota para criar usuários
userRouter.post("/register", createUser);

// Rota para obter todos os usuarios
userRouter.get("/", getAllUsers);

// Rota para obter um usuario por ID
userRouter.get("/:id", getOneUser);

// Rota para deleter usuario
userRouter.delete("/:id", deleteUser);

export default userRouter;