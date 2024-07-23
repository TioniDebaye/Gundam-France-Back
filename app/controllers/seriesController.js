const { log } = require("console");
const seriesDatamapper = require("../model/seriesDatamapper");
const path = require('path');
const createLogger = require("../service/logger");
const { log } = require("winston");
const infoLogger = createLogger('./logs/SerieInfo  %DATE%.log', 'info');
const errorLogger = createLogger('./logs/SerieError  %DATE%.log', 'error');


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
      res.status(404).json({message:"aucune série trouvée"});
      errorLogger.error(`Aucune Serie trouvée --> ERREUR : ${error}`)
    } else {
      res.json(result);
      infoLogger.info('Tous les series ont été trouvées')
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
    console.log(serieId);
   
    const { error, result } = await seriesDatamapper.getOneSerie(serieId);

    if (error) {
      res.status(404).json({message:"aucune série trouvée"});
      errorLogger.error(`Aucune Série trouvée --> ERREUR : ${error}`)
    } else {
      res.json(result);
      infoLogger.info(`Serie avec l'id ${serieId} trouvée`)
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
      res.status(404).json({message:"aucune série trouvée"});
      errorLogger.error(`Aucune série avec l'id ${req.params.id}trouvée --> ERREUR : ${error}`)
    } else {
      res.json(result);
      infoLogger.info(`Série avec l'id ${req.params.id} a été supprimée`)
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
    if (!req.file) {
      res.status(404).json({message:"aucune image"});
    } else {
    seriesData.img = req.file.path }
    console.log(seriesData);


    const { error, result } = await seriesDatamapper.createOneSerie(seriesData);
    
    if (error) {
      res.status(404).json({message:"aucune série créé"});
      errorLogger.error(`Série avec les paramètres suivants ${seriesData} n'a pas pu être créé --> ERREUR : ${error}`)
    } else {
      res.json(result);
      infoLogger.info(`Série avec les informations ${seriesData} a bien été crée`)
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
   
    if (!req.file) {
      res.status(404).json({message:"aucune image"});
      errorLogger.error(`Aucune modification possible pour la série avec les informations suivantes : ${seriesData} --> ERREUR : ${error}`)
    } else {
    seriesData.img = req.file.path.replace(/^Public[\\/]/, '').replace(/\\/g, '/');}
    

   
   
    const serieId = req.params.id
    console.log(serieId);
    const { error, result } = await seriesDatamapper.modifyOneSerie(serieId, seriesData);
    
    if (error) {
      res.status(404).json({message:"aucune série trouvée"});
      errorLogger.error(`Aucune Série avec l'id : ${serieId} trouvée --> ERREUR : ${error}`)
    } else {
      res.json(result);
      infoLogger.info(`Série avec l'id ${serieId} modifiée`)
    }
  },
  
};

module.exports = serieController;
