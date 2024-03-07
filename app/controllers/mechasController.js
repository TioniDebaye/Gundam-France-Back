mechasDatamapper = require("../model/mechasDatamapper");

const mechasController = {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */

  async getAllMechas(req, res, next) {
    const { error, result } = await mechasDatamapper.getAllMechas();

    if (error) {
      res.send("aucune serie trouvée");
    } else {
      res.json(result);
    }
  },

  async getOneMecha(req, res, next) {
    mechaId = req.params.id
    
    const { error, result } = await mechasDatamapper.getOneMecha(mechaId);

    if (error) {
      res.send("aucune serie trouvée");
    } else {
      res.json(result);
    }
  },
};

module.exports = mechasController;
