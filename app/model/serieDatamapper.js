const client = require("../service/dbPool")

const serieDatamapper = {

    async getAllSeries (req,res, next) {

         // Wait for the database connection
       

        try {
            const database = await client;

            // Accédez à la collection
            const series = database.db("gundam").collection("series");

            const result = await series.find()
            console.log(result);
            res.json(result);
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors de la récupération des séries.");
        }
}
}

module.exports = serieDatamapper