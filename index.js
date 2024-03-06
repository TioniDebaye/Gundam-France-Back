//require des différents modules ou fichiers

const express = require("express");
const app = express();
const router = require('./app/router/router');
const port = 3002;


const cors= require('cors');

//j'indique les chemins des fichiers statiques et de mes vues
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use(cors(
  {
      origin: 'http://localhost:5173',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true, // You may need this if you're using cookies or sessions 
  }
));
//j'indique à express d'utiliser mon fichier routeur
app.use(router);

//j'écoute sur le port défini plus haut
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });