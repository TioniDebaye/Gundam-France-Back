
const series = require('../../data/series.json')

const serieController = {
 

    /**
     * méthode pour afficher la page des séries
     * @param {*} request 
     * @param {*} response 
     */
    getSeries: (request,response) => {
        for (let index = 0; index < series.length; index++) {
            const text = series[index].text;
            let words = text.split(' ');
            words = words.slice(0,30);
            const excerpt = words.join(' ') + ' ...';
            series[index].excerpt = excerpt
        }
        response.render('series.ejs', { 
            listOfSeries: series
        });
    },

    /**
     * les paramètres à utiliser pour afficher une fiche série
     * @param {*} request 
     * @param {*} response 
     */

    //méthode pour récupérer une fiche série en fonction de son ID dans le fichier JSON
    getFicheSerie: (request,response) => {
        const idSerie = parseInt(request.params.serie)
        // console.log("🚀 ~ file: SerieController.js:22 ~ idSerie:", idSerie)

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
    }
}


module.exports = serieController;