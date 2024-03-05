const client = require("../service/dbPool")

const seriesDatamapper = {

    async getAllSeries (req,res, next) {

         // Wait for the database connection
         let result;
         let error;

         try {
            await client.connect();
            const database = client.db('Gundam');
            const seriesCollection = database.collection('series');
            // Query for a movie that has the title 'Back to the Future'
            query = {}
            const series = await seriesCollection.find(query).toArray();
            console.log(series);
          } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
          }

        return {error, result }
}
}

module.exports = seriesDatamapper