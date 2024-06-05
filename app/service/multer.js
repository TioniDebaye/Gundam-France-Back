// Importer multer
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      const urlSegments = req.originalUrl.split('/'); // Diviser l'URL en segments
      const firstSegment = urlSegments[1]; // Prendre le premier segment après le slash initial
      const seriesName = req.body.title; // Récupérer le nom de la série du formulaire
      const dir = `/content/${firstSegment}/${seriesName}`; // Créer le chemin du dossier
  
      // Vérifier si le dossier existe, le créer s'il n'existe pas
      fs.mkdirSync(dir, { recursive: true });
  
      cb(null, dir);
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
  });

// Filtrer les types de fichiers
const fileFilter = (req, file, cb) => {
  // Accepter seulement les images
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};


// Exporter le middleware
module.exports = multer({ storage: storage, fileFilter: fileFilter  });