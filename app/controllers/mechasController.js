const mechasDatamapper = require("../model/mechasDatamapper");


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
      res.status(404).json({ message: "aucun mecha trouvé" });
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

  async getOneMecha(req, res, next) {
    mechaId = req.params.id
    
    const { error, result } = await mechasDatamapper.getOneMecha(mechaId);

    if (error) {
      res.status(404).json({ message: "aucun mecha trouvé" });
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

  async deleteOneMecha (req, res, next) {

    mechaId = req.params.id 
 

    const { error, result } = await mechasDatamapper.deleteOneMecha(mechaId)

    if (error) {
      res.status(404).json({ message: "aucun mecha trouvé" });
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

  async createOneMecha (req, res, next) {

    mechaData = req.body

    const { error, result} = await mechasDatamapper.createOneMecha(mechaData)

    if (error) {
      res.status(404).json({message:"création de la fiche mécha impossible"});
    } else {
      res.json(result)
    }

  }, 

  /**
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */

  async updateOneMecha (req, res, next) {
    const mechaId = req.params.id
    const mechaData = req.body


    const { error, result } = await mechasDatamapper.updateOneMecha(mechaId, mechaData)

    if (error) {
      res.status(404).json({message:"modification de la fiche mécha impossible"});
    } else {
      res.json(result)
    }
  }
};

module.exports = mechasController;
