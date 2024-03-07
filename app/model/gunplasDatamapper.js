const client = require("../service/dbPool");
const { ObjectId } = require("mongodb");
const dot = require("mongo-dot-notation");

const gunplasDatamapper = {
  async getAllGunplas() {
    let error;
    let result;

    try {
      await client.connect();
      const database = client.db("Gundam");
      const gunplasCollection = database.collection("gunplas");
      // Query for a movie that has the title 'Back to the Future'
      query = {};
      const mechas = await gunplasCollection.find(query).toArray();
      result = mechas;
    } finally {
      await client.close();
    }
    return { error, result };
  },

  async getOneGunpla(gunplaId) {
    let error;
    let result;

    try {
      await client.connect();
      const database = client.db("Gundam");
      const gunplasCollection = database.collection("gunplas");

      query = { _id: new ObjectId(gunplaId) };
      const oneGunpla = await gunplasCollection.findOne(query);
      result = oneGunpla;
    } finally {
      await client.close();
    }
    return { error, result }
  },

  async createOneGunpla(gunplaData) {

    let error;
    let result;

    try {
      await client.connect();
      const database = client.db("Gundam");
      const gunplasCollection = database.collection("gunplas");

      const oneGunpla = await gunplasCollection.insertOne(gunplaData)
      result = oneGunpla
    } finally {
        await client.close();
    }
    return { error, result }
  },

  async deleteOneGunpla(gunplaId) {
    let error;
    let result;

    try {
      await client.connect();
      const database = client.db("Gundam");
      const gunplasCollection = database.collection("gunplas");

      query = {_id: new ObjectId(gunplaId)}
      const oneGunpla = await gunplasCollection.deleteOne(query)
      result = oneGunpla
    } finally {
        await client.close();
    }
    return { error, result }
  },

  async updateOneGunpla(gunplaId, gunplaData) {
    let error;
    let result;
    const transformedGunplaData = dot.flatten(gunplaData)

    try {
      await client.connect();
      const database = client.db("Gundam");
      const gunplasCollection = database.collection("gunplas");

      const oneGunpla = await gunplasCollection.updateOne({ _id: new ObjectId(gunplaId)}, transformedGunplaData)
      result = oneGunpla
    } finally {
        await client.close()
    }
    return { error, result }
  },
};

module.exports = gunplasDatamapper;
