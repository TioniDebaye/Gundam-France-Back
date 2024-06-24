const client = require("../service/dbPool");
const { ObjectId } = require("mongodb");
const dot = require("mongo-dot-notation");
const dbPool = require("../service/dbPool");
const e = require("cors");
const { query } = require("express");

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
      const db = dbPool.getDb();
      const mechasCollection = db.collection("mechas");
      // Query for a movie that has the title 'Back to the Future'
      const mechas = await mechasCollection.find({}).toArray();
      
        // Creating excerpts for each mecha
        for (let index = 0; index < mechas.length; index++) {
          const text = mechas[index].history;
          let words = text.split(" ");
          words = words.slice(0, 30);
          const defCourte = words.join(" ") + " ...";
          mechas[index].defCourte = defCourte;
        }
      
      result = mechas;
      
    } catch (err) {
      error = err;
    }

    return { error, result };
  },

  /**
   *
   * @param {*} mechaId
   * @returns
   */

  async getOneMecha(mechaId) {
    let result;
    let error;

    try {
      const db = dbPool.getDb();
      const mechasCollection = db.collection("mechas");

      query = { _id: new ObjectId.createFromHexString(mechaId) };
      const oneMecha = await mechasCollection.findOne(query);
      result = oneMecha;
    } catch (err) {
      error = err;
    }

    return { error, result };
  },

  /**
   *
   * @param {object} mechaId
   * @returns
   */

  async deleteOneMecha(mechaId) {
    let error;
    let result;

    try {
      const db = dbPool.getDb();
      const mechasCollection = db.collection("mechas");

      query = { _id: new ObjectId.createFromHexString(mechaId) };
      const oneMecha = await mechasCollection.deleteOne(query);
      result = oneMecha;
    } catch (err) {
      error = err;
    }
    return { error, result };
  },

  /**
   *
   * @param {*} mechaData
   * @returns
   */

  async createOneMecha(mechaData) {
    let error;
    let result;

    try {
      const db = dbPool.getDb();
      const mechasCollection = db.collection("mechas");

      const oneMecha = await mechasCollection.insertOne(mechaData);
      result = oneMecha;
    } catch (err) {
      error = err;
    }
    return { error, result };
  },

  /**
   *
   * @param {*} mechaId
   * @param {*} mechaData
   * @returns
   */

  async updateOneMecha(mechaId, mechaData) {
    let error;
    let result;

    try {
      const db = dbPool.getDb();
      const mechasCollection = db.collection("mechas");

      query = { _id: new ObjectId.createFromHexString(mechaId) };
      const onemecha = await mechasCollection.updateOne(query, {$set: mechaData});
      result = onemecha;
    } catch (err) {
      error = err;
    }
    return { error, result };
  },
};

module.exports = mechasController;
