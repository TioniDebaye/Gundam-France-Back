require('dotenv').config();
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
const pool = client.connect();  // Connect to the database

module.exports = pool;