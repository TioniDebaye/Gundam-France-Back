//require des différents modules ou fichiers

const express = require("express");
const app = express();
const router = require('./router.js');
const port = 3002;

//j'indique les chemins des fichiers statiques et de mes vues
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//j'indique à express d'utiliser mon fichier routeur
app.use(router);

//j'écoute sur le port défini plus haut
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });