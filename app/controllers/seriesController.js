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

  /**
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */

  async getOneSerie(req, res, next) {
    serieId = req.params.id
   
    const { error, result } = await seriesDatamapper.getOneSerie(serieId);

    if (error) {
      res.send("aucune serie trouvée");
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
  
  async deleteOneSerie(req, res, next) {
    const { error, result } = await seriesDatamapper.deleteOneSerie(req.params.id);

    if (error) {
      res.send("aucune serie trouvée");
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

  async createOneSerie(req, res, next) {
    const seriesData = req.body;


    const { error, result } = await seriesDatamapper.createOneSerie(seriesData);
    
    if (error) {
      res.send("aucune serie trouvée");
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

  async modifyOneSerie(req, res, next) {
    const seriesData = req.body;
    const serieId = req.params.id
  
 



    const { error, result } = await seriesDatamapper.modifyOneSerie(serieId, seriesData);
    
    if (error) {
      res.send("aucune serie trouvée");
    } else {
      res.json(result);
    }
  },
  
};

module.exports = serieController;
