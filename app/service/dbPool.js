const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";

let dbConnection

const connectToServer = async () => {
    const client = new MongoClient(uri);
    await client.connect();
    dbConnection = client.db('Gundam');
  };
  
  const getDb = () => {
    if (!dbConnection) {
      throw new Error('Database not initialized');
    }
    return dbConnection;
  };


module.exports = {
    connectToServer,
    getDb
}
