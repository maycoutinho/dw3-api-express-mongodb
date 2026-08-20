// Serviços de Games
// Aqui será inserido os métodos para Ler, cadastrar, Alterar e Excluir games

// Importando o Model
import Game from "../models/Games.js"

class gameService {
    // Serviço para ler os jogos
    async getAll() {
        // Tentativa da promessa (sucesso)
        try {
            //  o método .find() do mongoose busca registros
            const games = await Game.find()
            return games
            // Caso ocorra um erro será executado o catch
        } catch (error) {
            console.log(error)
        }
    }
    //MÉTODO PARA CADASTRAR JOGOS
    async Create(title, year, platform, price) {
        try {
            // enviando os dados a serem cadastrados
            const newGame = new Game({
                // title: title,
                title,
                year,
                platform,
                price
            })
            //Aguardar a operação de cadastro
            await newGame.save() //.save() é o metodo do mongoose para cadastrar
        } catch (error) {
            console.log(error)
        }
    }

    //METODO PARA EXCLUIR UM JOGO
    async Delete(id){
        try {
            await Game.findByIdAndDelete(id)
            //O método findByIdAndaDelete do mongoose busca um registro pela ID e deleta
            console.log(`O jogo com a id ${id} foi deletado.`)
        }catch(error){
            console.log(error)
        }

   
    }

     //METODO PARA ALTERAR UM JOGO
        async Update(id, title, year, platform, price){
            try{
                await Game.findByIdAndUpdate(id, {
                    title,
                    year,
                    platform,
                    price
                })
                console.log(`O jogo com a id ${id} foi alterado. `)
            } catch (error){
                console.log(error)
            }

        } //ENCERRA A CLASSDE

}
// Exportando a classe
export default new gameService()

