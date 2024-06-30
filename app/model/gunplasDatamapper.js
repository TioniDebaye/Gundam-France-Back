const client = require("../service/dbPool");
const { ObjectId } = require("mongodb");
const dot = require("mongo-dot-notation");
const dbPool = require("../service/dbPool");

const gunplasDatamapper = {
  /**
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns
   */

  async getAllGunplas() {
    let error;
    let result;

    try {
      const db = dbPool.getDb();
      const gunplasCollection = db.collection("gunplas");
      // Query for a movie that has the title 'Back to the Future'
      query = {};

      const gunplas = await gunplasCollection.find(query).toArray();
      
      for (let index = 0; index < gunplas.length; index++) {
        const text = gunplas[index].presentation;
        let words = text.split(" ");
        if (words.length > 30) {
          words = words.slice(0, 30);
          const defCourte = words.join(" ") + " ...";
          gunplas[index].defCourte = defCourte;
        }
      }

      result = gunplas;
    } catch (err) {
      error = err;
    }
    return { error, result };
  },

  /**
   *
   * @param {*} gunplaId
   * @returns
   */

  async getOneGunpla(gunplaId) {
    let error;
    let result;

    try {
      const db = dbPool.getDb();
      const gunplasCollection = db.collection("gunplas");

      const oneGunpla = await gunplasCollection.findOne({
        _id: ObjectId.createFromHexString(gunplaId),
      });
      result = oneGunpla;
    } catch (err) {
      error = err;
    }
    return { error, result };
  },

  /**
   *
   * @param {*} gunplaData
   * @returns
   */

  async createOneGunpla(gunplaData) {
    let error;
    let result;

    try {
      const db = dbPool.getDb();
      const gunplasCollection = db.collection("gunplas");

      const oneGunpla = await gunplasCollection.insertOne(gunplaData);
      result = oneGunpla;
    } catch (err) {
      error = err;
    }
    return { error, result };
  },

  /**
   *
   * @param {*} gunplaId
   * @returns
   */

  async deleteOneGunpla(gunplaId) {
    let error;
    let result;

    try {
      const db = dbPool.getDb();
      const gunplasCollection = db.collection("gunplas");

      const oneGunpla = await gunplasCollection.deleteOne({
        _id: ObjectId.createFromHexString(gunplaId),
      });
      result = oneGunpla;
    } catch (err) {
      error = err;
    }
    return { error, result };
  },

  /**
   *
   * @param {string} gunplaId
   * @param {*} gunplaData
   * @returns
   */

  async updateOneGunpla(gunplaId, gunplaData) {
    let error;
    let result;

    try {
      const db = dbPool.getDb();
      const gunplasCollection = db.collection("gunplas");

      const oneGunpla = await gunplasCollection.updateOne(
        { _id: ObjectId.createFromHexString(gunplaId) },
        { $set: gunplaData }
      );
      result = oneGunpla;
    } catch (err) {
      error = err;
    }
    return { error, result };
  },
};

module.exports = gunplasDatamapper;
