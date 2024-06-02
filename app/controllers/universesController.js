const universesDatamapper = require("../model/universesDatamapper");

const universesController = {
     /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */

  async getAllUniverses(req, res, next) {
    const { error, result } = await universesDatamapper.getAllUniverses();

    if (error) {
      res.send("aucun Univers trouvé");
    } else {
      res.json(result);
    }
  },

  /**
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */

  async getOneUnivers(req, res, next) {
    universId = req.params.id
    console.log(universId);
   
    const { error, result } = await universesDatamapper.getOneUnivers(universId);

    if (error) {
      res.send("aucun Univers trouvé");
    } else {
      res.json(result);
    }
  },
}

module.exports = universesController;