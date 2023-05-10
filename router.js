const express = require("express");
const router = express.Router();
const series = require("./data/series.json")

//j'indique pour le moment une route index.ejs en page d'accueil le temps de travailler le reste du site
router.get('/', (request, response) => {
    response.render("index.ejs")
});

//j'indique ici la route pour les series, je lui passe la variable series qui pointe sur mon fichier json pour boucler dessus
router.get('/series', (request, response) => {
    response.render('series.ejs', { 
        series
    });
});



//j'exporte mon module routeur pour que le app.js puisse le lancer
module.exports = router;