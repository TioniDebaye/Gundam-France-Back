const seriesDatamapper = require("../model/seriesDatamapper");

const serieController = {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */

  async getAllSeries(req, res, next) {
    const { error, result } = await seriesDatamapper.getAllSeries();

    if (error) {
      res.send("aucune serie trouvée");
    } else {
      res.json(result);
    }
  },

  async getOneSerie(req, res, next) {
    const { error, result } = await seriesDatamapper.getOneSerie(req.params.id);

    if (error) {
      res.send("aucune serie trouvée");
    } else {
      res.json(result);
    }
  },
};

module.exports = serieController;
