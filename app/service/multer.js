// // Importer multer
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, path.join( 'Public', 'content', 'ficheserie'))
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-') +  file.originalname);
    }
  });

// Filtrer les types de fichiers
// const fileFilter = (req, file, cb) => {
//   // Accepter seulement les images
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };


// Exporter le middleware


module.exports = multer({ storage: storage });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join( 'Public', 'content', 'ficheserie'))
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })

// // const upload = multer({ storage: storage })
// module.exports = multer({ storage: storage });