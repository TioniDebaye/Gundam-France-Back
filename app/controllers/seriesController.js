

const  seriesDatamapper  = require("../model/seriesDatamapper")

const serieController = {


    async getAllSeries(req,res,next) {

        const {error, result} = await seriesDatamapper.getAllSeries()

        if (error) {
            res.send("aucune serie trouvée")
        } else {
    
            res.json(result)

        }
    }

}

module.exports = serieController;