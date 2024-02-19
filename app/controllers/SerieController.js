

const  serieDatamapper  = require("../model/serieDatamapper")

const serieController = {


    async getAllSeries(req,res,next) {

        const {error, result} = await serieDatamapper.getAllSeries()

        if (error) {
            res.send("aucune serie trouvée")
        } else {
    
            res.json(result)

        }
    }

}

module.exports = serieController;