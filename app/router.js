const express = require("express");
const router = express.Router();
const series = require("../data/series.json")

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

router.get('/ficheserie/:serie', (request, response) => {
    const idSerie = parseInt(request.params.serie)

    const foundSerie = series.find((serie) => {
        return serie.id === idSerie;
    })

    if (foundSerie) {
        response.render('ficheserie.ejs', { 
            serie: foundSerie
        });
    } else {
        response.status(404).send('Série introuvable');
    }

});



//j'exporte mon module routeur pour que le app.js puisse le lancer
module.exports = router;