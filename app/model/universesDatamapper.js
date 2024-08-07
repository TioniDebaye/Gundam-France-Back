const client = require("../service/dbPool");
const { ObjectId } = require("mongodb");
const dot = require("mongo-dot-notation");
const dbPool = require("../service/dbPool");

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
      const db = dbPool.getDb();
      const universesCollection = db.collection("universes");
      // Query for a movie that has the title 'Back to the Future'
      query = {};
      const universes = await universesCollection.find(query).toArray();
      for (let index = 0; index < universes.length; index++) {
        const text = universes[index].description;
        let words = text.split(" ");
        if (words.length > 30) {
          words = words.slice(0, 30);
          const defCourte = words.join(" ") + " ...";
          universes[index].defCourte = defCourte;
        }
      }
      result = universes;
    } catch (err) {
      error = err;
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
      const db = dbPool.getDb();
      const universesCollection = db.collection("universes");

      const oneUnivers = await universesCollection.findOne({
        _id: ObjectId.createFromHexString(universId),
      });

      result = oneUnivers;
    } catch (err) {
      error = err;
    }

    return { error, result };
  },
};

module.exports = universesDatamapper;
