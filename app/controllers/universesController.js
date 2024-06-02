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
      res.send("aucune serie trouvée");
    } else {
      res.json(result);
    }
  },
}

module.exports = universesController;