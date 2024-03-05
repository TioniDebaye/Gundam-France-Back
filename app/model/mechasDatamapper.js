const client = require("../service/dbPool");

const mechasController = {

   /**
    * 
    * @param {*} req 
    * @param {*} res 
    * @param {*} next 
    * @returns 
    */ 
   
  async getAllMechas(req, res, next) {
    // Wait for the database connection
    let result;
    let error;

    try {
      await client.connect();
      const database = client.db("Gundam");
      const mechasCollection = database.collection("mechas");
      // Query for a movie that has the title 'Back to the Future'
      query = {};
      const mechas = await mechasCollection.find(query).toArray();
      console.log(mechas);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }

    return { error, result };
  },
};

module.exports = mechasController;
