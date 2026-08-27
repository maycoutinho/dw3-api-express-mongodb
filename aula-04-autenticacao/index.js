// Importar o Express
import express from "express";

// Importando o Mongoose
import mongoose from "mongoose";

// Importar o Model de Game
import Game from "./models/Games.js";

// Importar o Model de Usuário
import User from "./models/Users.js";

// Importar as Rotas(endpoints)
import gameRoutes from "./routes/gameRouter.js";

import userRouter from "./routes/userRouter.js";

// Carregando express
const app = express();

// Configurações do Express
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Carregando as rotas de games
app.use("/", gameRoutes);
// Carregando a rota de usuário
app.use("/", userRouter);

// Iniciando a Conexão com o MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/apithegames_aninhado");

// // ROTA PRINCIPAL DA API
// app.get("/", (req, res) => {
//   // JSON que será retornando pela API
//   const games = [
//     {
//       title: "Fifa 2019",
//       year: 2019,
//       platform: "X-box 360",
//       price: 198,
//     },
//     {
//       title: "The Sims",
//       year: 2016,
//       platform: "PC (Windows)",
//       price: 149,
//     },
//     {
//       title: "CS GO",
//       year: 2012,
//       platform: "PC (Windows)",
//       price: 89,
//     },
//   ];
//   // Configurando o retorno do API
//   res.status(200).json(games);
// });

// Iniciando o servidor da API
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar a API!" + error);
  } else {
    console.log("API iniciada com sucesso na porta " + port);
  }
});
