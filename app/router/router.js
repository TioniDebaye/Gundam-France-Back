const express = require("express");
const router = express.Router();
const seriesController = require('../controllers/seriesController')
const mechasController = require('../controllers/mechasController')



//j'indique pour le moment une route index.ejs en page d'accueil le temps de travailler le reste du site
router.get('/', (req, res) => {
    response.render("index.ejs")
});

//j'indique ici la route pour les series, je lui passe la variable series qui pointe sur mon fichier json pour boucler dessus

//route pour afficher la page de récapitulatif des séries
router.get('/series', seriesController.getAllSeries)

//route pour affiche la page d'une série en particuliers
router.get('/ficheserie/:id', seriesController.getOneSerie);

router.delete('/ficheserie/:id', seriesController.deleteOneSerie)

router.post('/series',   seriesController.createOneSerie)

router.patch('ficheserie/:id', seriesController.modifyOneSerie)


//route pour afficher la page des mechas
router.get('/mechas', mechasController.getAllMechas );
// //route pour afficher une fiche de jeu vidéo
// router.get('/videogames/:game', );


//j'exporte mon module routeur pour que le app.js puisse le lancer
module.exports = router;