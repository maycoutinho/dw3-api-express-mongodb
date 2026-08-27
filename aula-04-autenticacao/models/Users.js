import mongoose from "mongoose";

//Criando um schema de usuário
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// Iniciando model
const User = mongoose.model("User",userSchema);

export default User;