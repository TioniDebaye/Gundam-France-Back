
const dbPool = require("../service/dbPool");
const bcrypt = require("bcrypt");

const userDatamapper = {

    createOneUser: async (userData) => {

        let error;
        let result;

        try {
            const db= dbPool.getDb();
            const usersCollection = db.collection("users");

            const oneUser = await usersCollection.insertOne(userData);

            result = oneUser; 
        } catch (err) {
            error=err;
        }
        return {error, result};

    },

    getOneUser: async (email) => {
        let error;
        let result;

        try {
            const db = dbPool.getDb();
            const usersCollection = db.collection("users");

            const oneUser = await usersCollection.findOne({ email });

            result = oneUser;
        } catch (err) {
            error = err;
        }
        return { error, result };
    }
}

module.exports = userDatamapper