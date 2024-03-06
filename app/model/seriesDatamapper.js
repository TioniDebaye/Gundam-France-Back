const { ObjectId } = require("mongodb");
const client = require("../service/dbPool");

const seriesDatamapper = {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns
   */

  async getAllSeries() {
    // Wait for the database connection
    let result;
    let error;

    try {
      await client.connect();
      const database = client.db("Gundam");
      const seriesCollection = database.collection("series");
      // Query for a movie that has the title 'Back to the Future'
      query = {};
      const series = await seriesCollection.find(query).toArray();
      // Creating excerpts for each series
      for (let index = 0; index < series.length; index++) {
        const text = series[index].text;
        let words = text.split(" ");
        words = words.slice(0, 30);
        const defCourte = words.join(" ") + " ...";
        series[index].defCourte = defCourte;
      }
      result = series;
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }

    return { error, result };
  },

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns
   */

  async getOneSerie(serieId) {
    let result;
    let error;

    try {
      await client.connect();
      const database = client.db("Gundam");
      const seriesCollection = database.collection("series");

      // Query for a movie that has the title 'Back to the Future'
      query = { id: parseInt(serieId) };
      const oneSerie = await seriesCollection.findOne(query);

      result = oneSerie;
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }

    return { error, result };
  },
};

module.exports = seriesDatamapper;
