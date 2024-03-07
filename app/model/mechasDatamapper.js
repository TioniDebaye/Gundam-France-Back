const client = require("../service/dbPool");
const { ObjectId} = require("mongodb");
const dot = require('mongo-dot-notation');
const { flatten, $timestamp, $unset } = require('mongo-dot-notation');

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
      result = mechas
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }

    return { error, result };
  },

  async getOneMecha(mechaId) {
    let result;
    let error;

    try {
      await client.connect();
      const database = client.db("Gundam");
      const mechasCollection = database.collection("mechas");

      query = { _id: new ObjectId(mechaId) };
      const oneMecha = await mechasCollection.findOne(query);
      result = oneMecha
    } finally {
      await client.close();
    }

    return { error, result };
  },

  async deleteOneMecha(mechaId) {

    let error;
    let result;
    console.log(mechaId);
    try {
      await client.connect();
      const database = client.db("Gundam");
      const mechasCollection = database.collection("mechas");

      query = { _id: new ObjectId(mechaId) };
      const oneMecha = await mechasCollection.deleteOne(query);
      result = oneMecha
    } finally {
      await client.close();
    }
    return { error, result };
  },

  async createOneMecha(mechaData) {

    let error;
    let result;

    try {
      await client.connect();
      const database = client.db("Gundam");
      const mechasCollection = database.collection("mechas");

      const oneMecha = await mechasCollection.insertOne(mechaData);
      result = oneMecha
    } finally {
      await client.close()
    }
    return { error, result };
  },

  async updateOneMecha(mechaId, mechaData) {

    let error;
    let result;
    const transformedMechaData = dot.flatten(mechaData)
    

    try {
      await client.connect()
      const database = client.db("Gundam");
      const mechasCollection = database.collection("mechas");

      

      const onemecha = await mechasCollection.updateOne(
        { _id: new ObjectId(mechaId) }, // Utilisez ObjectId pour convertir la chaîne id en ObjectId
        transformedMechaData , 
      );
      result = onemecha
    } finally {
      await client.close()
    }
    return { error, result };
  },
};

module.exports = mechasController;
