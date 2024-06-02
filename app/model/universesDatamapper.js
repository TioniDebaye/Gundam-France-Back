const client = require("../service/dbPool");
const { ObjectId } = require("mongodb");
const dot = require("mongo-dot-notation");


const universesDatamapper = {
    /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns
   */

  async getAllUniverses() {
    // Wait for the database connection
    let result;
    let error;

    try {
      await client.connect();
      const database = client.db("Gundam");
      const universesCollection = database.collection("universes");
      // Query for a movie that has the title 'Back to the Future'
      query = {};
      const universes = await universesCollection.find(query).toArray();
      // Creating excerpts for each series
      for (let index = 0; index < universes.length; index++) {
        const text = universes[index].description;
        let words = text.split(" ");
        words = words.slice(0, 30);
        const defCourte = words.join(" ") + " ...";
        universes[index].defCourte = defCourte;
      }
      result = universes;
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }

    return { error, result };
  }, 


  /**
   * @param {*} Id
   * @returns
   */

  async getOneUnivers(universId) {
    let result;
    let error;
  
    try {
      await client.connect();
      const database = client.db("Gundam");
      const universesCollection = database.collection("universes");

      // Query for a movie that has the title 'Back to the Future'
      query = { _id: new ObjectId(universId) };
    
      const oneUnivers = await universesCollection.findOne(query);

      result = oneUnivers;
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }

    return { error, result };
  },

}

module.exports = universesDatamapper;