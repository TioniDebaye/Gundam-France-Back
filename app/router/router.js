const express = require("express");
const router = express.Router();
const seriesController = require('../controllers/seriesController')
const mechasController = require('../controllers/mechasController')
const gunplasController = require('../controllers/gunplasController')



//j'indique pour le moment une route index.ejs en page d'accueil le temps de travailler le reste du site
router.get('/', (req, res) => {
    response.render("index.ejs")
});

router.get('/app/admin')

//route pour afficher la page de récapitulatif des séries
router.get('/series', seriesController.getAllSeries)
router.get('/ficheserie/:id', seriesController.getOneSerie);
router.delete('/ficheserie/:id', seriesController.deleteOneSerie)
router.post('/series/create',   seriesController.createOneSerie)
router.patch('/ficheserie/:id', seriesController.modifyOneSerie)


//route pour afficher la page des mechas
router.get('/mechas', mechasController.getAllMechas );
router.get('/fichemecha/:id', mechasController.getOneMecha)
router.post('/mechas/create', mechasController.createOneMecha)
router.delete('/fichemecha/:id', mechasController.deleteOneMecha)
router.patch('/fichemecha/:id', mechasController.updateOneMecha)

//route pour les gunplas 

router.get('/gunplas', gunplasController.getAllGunplas);
router.get('/fichegunpla/:id', gunplasController.getOneGunpla)
router.post('/gunplas', gunplasController.createOneGunpla)
router.delete('/fichegunpla/:id', gunplasController.deleteOneGunpla)
router.patch('/fichegunpla/:id', gunplasController.updateOneGunpla)

//j'exporte mon module routeur pour que le app.js puisse le lancer
module.exports = router;