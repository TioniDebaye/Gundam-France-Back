const gunplasDatamapper = require('../model/gunplasDatamapper')

const gunplasController = {

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

    async getAllGunplas (req, res, next) {

        const { error, result } = await gunplasDatamapper.getAllGunplas();

        if (error) {
          res.send("aucun gunpla trouvé");
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

    async getOneGunpla (req, res, next) {
        const gunplaId = req.params.id

        const { error, result } = await gunplasDatamapper.getOneGunpla(gunplaId);

        if (error) {
          res.send("aucun Gunpla trouvé");
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

    async createOneGunpla (req, res, next) {
        const gunplaData = req.body
        const { error, result } = await gunplasDatamapper.createOneGunpla(gunplaData);

        if (error) {
          res.send("erreur lors de la création de la fiche gunpla");
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

    async deleteOneGunpla (req, res, next) {
        const gunplaId = req.params.id
        const { error, result } = await gunplasDatamapper.deleteOneGunpla(gunplaId);

        if (error) {
          res.send("aucun gunpla trouvé");
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

    async updateOneGunpla (req, res, next) {
        gunplaId = req.params.id
        gunplaData = req.body
        const { error, result } = await gunplasDatamapper.updateOneGunpla(gunplaId, gunplaData);

        if (error) {
          res.send("aucun gunpla trouvé");
        } else {
          res.json(result);
        }
    }

}

module.exports = gunplasController