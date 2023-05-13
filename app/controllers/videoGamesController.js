const videoGames = require('../../data/videoGames.json')

const videoGamesController = {
    //méthode pour afficher la page des jeux vidéos via le fichier videoGames.json
    getVideoGames: (request,response) => {
        response.render('videogames.ejs'), {
            videoGames,
        }
    },
    
    //méthode pour afficher la page d'un jeu vidéo en fonction de son ID dans le fichier videoGames.json
    getGame: (request,response) => {
        const game = request.params.game

        const foundGame = videoGames.find((game) => {
            return game.id === game;
        })

        if (foundGame) {
            response.render('game.ejs', {
                game: foundGame
            });
        }
    }
}

module.exports = videoGamesController;