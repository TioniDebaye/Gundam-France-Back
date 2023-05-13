const express = require("express");
const router = express.Router();
const serieController = require('./controllers/serieController')
const videoGamesController = require('./controllers/videoGamesController')


//j'indique pour le moment une route index.ejs en page d'accueil le temps de travailler le reste du site
router.get('/', (request, response) => {
    response.render("index.ejs")
});

//j'indique ici la route pour les series, je lui passe la variable series qui pointe sur mon fichier json pour boucler dessus

//route pour afficher la page de récapitulatif des séries
router.get('/series', serieController.getSeries);
//route pour affiche la page d'une série en particuliers
router.get('/ficheserie/:serie', serieController.getFicheSerie);


//route pour afficher la page des jeux vidéos
router.get('/videogames', videoGamesController.getVideoGames );
//route pour afficher une fiche de jeu vidéo
router.get('/videogames/:game', );


//j'exporte mon module routeur pour que le app.js puisse le lancer
module.exports = router;