const { ObjectId } = require("mongodb");
const dot = require("mongo-dot-notation");
const client = require("../service/dbPool");
const dbPool = require("../service/dbPool");

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
      const db = dbPool.getDb();
      const seriesCollection = db.collection("series");
      // Query for a movie that has the title 'Back to the Future'
      query = {};
      const series = await seriesCollection.find(query).toArray();
      for (let index = 0; index < series.length; index++) {
        const text = series[index].presentation;
        let words = text.split(" ");
        if (words.length > 30) {
          words = words.slice(0, 30);
          const defCourte = words.join(" ") + " ...";
          series[index].defCourte = defCourte;
        }
      }
      result = series;
    } catch (err) {
      error = err;
    }

    return { error, result };
  },

  /**
   *
   * @param {*} serieId
   * @returns
   */

  async getOneSerie(serieId) {
    let result;
    let error;
    console.log(serieId);
    try {
      const db = dbPool.getDb();
      const seriesCollection = db.collection("series");

      const oneSerie = await seriesCollection.findOne({
        _id: ObjectId.createFromHexString(serieId),
      });

      result = oneSerie;
    } catch (err) {
      error = err;
    }

    return { error, result };
  },

  /**
   *
   * @param {*} serieId
   * @returns
   */

  async deleteOneSerie(serieId) {
    let result;
    let error;

    try {
      const db = dbPool.getDb();
      const seriesCollection = db.collection("series");

      const oneSerie = await seriesCollection.deleteOne({
        _id: ObjectId.createFromHexString(serieId),
      });

      result = oneSerie;
    } catch (err) {
      error = err;
    }

    return { error, result };
  },

  /**
   *
   * @param {*} serieId
   * @returns
   */

  async createOneSerie(seriesData) {
    let result;
    let error;

    try {
      const db = dbPool.getDb();
      const seriesCollection = db.collection("series");

      const oneSerie = await seriesCollection.insertOne(seriesData);

      result = oneSerie;
    } catch (err) {
      error = err;
    }

    return { error, result };
  },

  /**
   *
   * @param {*} seriesData
   * @returns
   */

  async modifyOneSerie(serieId, seriesData) {
    let result;
    let error;
    console.log(serieId);
    console.log(seriesData);
   
    try {
      const db = dbPool.getDb();
      const seriesCollection = db.collection("series");

      const oneSerie = await seriesCollection.updateOne(
        { _id: ObjectId.createFromHexString(serieId) },
        { $set: seriesData }
      );

      result = oneSerie;
    } catch (err) {
      error = err;
    }

    return { error, result };
  },
};

module.exports = seriesDatamapper;
