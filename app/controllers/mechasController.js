
mechasDatamapper  = require("../model/mechasDatamapper")

const mechasController = {


    async getAllMechas(req,res,next) {

        const {error, result} = await mechasDatamapper.getAllMechas()

        if (error) {
            res.send("aucune serie trouvée")
        } else {
    
            res.json(result)

        }
    }

}

module.exports = mechasController;