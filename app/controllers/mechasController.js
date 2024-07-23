const mechasDatamapper = require("../model/mechasDatamapper");
const createLogger = require("../service/logger");
const { log } = require("winston");
const infoLogger = createLogger('./logs/MechaInfo  %DATE%.log', 'info');
const errorLogger = createLogger('./logs/MechaError  %DATE%.log', 'error');


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
      errorLogger.error(`Aucun Mecha trouvé --> ERREUR : ${error}`)
    } else {
      res.json(result);
      infoLogger.info('Tous les méchas ont été trouvés')
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
      errorLogger.error(`le mecha avec l'id ${mechaId} n'a pas été trouvé --> ERREUR : ${error}`)
    } else {
      res.json(result);
      infoLogger.info(`Mecha avec l'id ${mechaId} trouvé`)
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
      errorLogger.error(`le mecha avec l'id ${mechaId} n'a pas été trouvé --> ERREUR : ${error}`)
    } else {
      res.json(result);
      infoLogger.info(`Mecha avec l'id ${mechaId} a été supprimé`)
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
      errorLogger.error(`Mecha avec les informations suivantes : ${mechaData} n'a pas été crée --> ERREUR : ${error}`)
    } else {
      res.json(result)
      infoLogger.info(`Mecha avec les informations suivantes : ${mechaData} a bien été créé`)
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
      errorLogger.error(`Mecha ${mechaId} mis à jour avec les informations suivantes : ${mechaData} n'a pas été mis à jour --> ERREUR : ${error}`)
    } else {
      res.json(result)
      infoLogger.info(`Mecha ${mechaId} mis à jour avec les informations suivantes : ${mechaData} a bien été créé`)
    }
  }
};

module.exports = mechasController;
