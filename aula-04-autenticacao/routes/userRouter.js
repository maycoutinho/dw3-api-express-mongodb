import express from 'express';
const userRouter = express.Router();

//Importando o controller
import userController from '../controllers/userController.js';

// Endpoint para cadastrar um usuário
userRouter.post("/user", userController.createUser);

//Endpoint para LOGAR um usuário
userRouter.post("/login",userController.loginUser)

export default userRouter