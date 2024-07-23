const dbPool = require("../service/dbPool");
const bcrypt = require("bcrypt");
const userDatamapper = require("../model/userDatamapper");

const userController = { 
    async createOneUser (req, res, next) {
        try {
            const { email, password, ...otherData } = req.body;
    
            // Vérifier si l'email existe déjà
            const { error: findError, result: existingUser } = await userDatamapper.getOneUser(email);
            if (findError) {
                return res.status(500).send('Erreur lors de la vérification de l\'email');
            }
            if (existingUser) {
                return res.status(409).send('Email existe déjà');
            }
    
            // Hacher le mot de passe avant de créer l'utilisateur
            const hashedPassword = await bcrypt.hash(password, 10);
            const userData = {
                email,
                password: hashedPassword,
                ...otherData
            };
    
            const { error, result } = await userDatamapper.createOneUser(userData);
            if (error) {
                return res.status(500).send('Erreur lors de la création de l\'utilisateur');
            }
            res.status(201).send(result);
        } catch (error) {
            res.status(500).send('Erreur serveur');
        }
    }, 

    async getOneUser(req, res, next) {
        try {
            const { email, password } = req.body;
            const { error, result } = await userDatamapper.getOneUser(email);
    
            if (error) {
                return res.status(500).send('Erreur lors de la récupération de l\'utilisateur');
            }
            if (!result) {
                return res.status(404).send('Utilisateur non trouvé');
            }
    
            const match = await bcrypt.compare(password, result.password);
            if (!match) {
                return res.status(401).send('Mot de passe incorrect');
            }
    
            res.status(200).send('Accès accordé');
        } catch (error) {
            res.status(500).send('Erreur serveur');
        }
    },

    async loginUser(req, res) {
        try {
            const { email, password } = req.body;
            const { error, result } = await userDatamapper.getOneUser(email);
    
            if (error) {
                return res.status(500).send('Erreur lors de la récupération de l\'utilisateur');
            }
            if (!result) {
                return res.status(404).send('Utilisateur ou Mot de passe incorrect');
            }
    
            const match = await bcrypt.compare(password, result.password);
            if (!match) {
                return res.status(401).send('Email ou Mot de passe incorrect');
            }
    
            res.status(200).send('Accès accordé');
        } catch (error) {
            res.status(500).send('Erreur serveur');
        }
    }
}

module.exports = userController;