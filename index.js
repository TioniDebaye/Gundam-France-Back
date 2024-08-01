//require des différents modules ou fichiers

const express = require("express");
const app = express();
const router = require('./app/router/router');
const port = 3002;
const dbPool = require("./app/service/dbPool");
const bodyParser = require('body-parser')
const session = require("express-session");
require('dotenv').config();


const cors= require('cors');

//j'indique les chemins des fichiers statiques et de mes vues
app.use(express.static(__dirname + "/Public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.json());


app.use(express.urlencoded({ extended: true }));

// Utiliser body-parser pour analyser les données du corps des requêtes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(cors(
  {
      origin: 'http://localhost:5173',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: false, // You may need this if you're using cookies or sessions 
  }
));

// Configuration de la session
app.use(session({
    secret: 'leclercserachampion',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Utilise `true` en production avec HTTPS
}));

//j'indique à express d'utiliser mon fichier routeur
app.use(router);

dbPool.connectToServer()
    .then(() => {
        console.log('Connected to MongoDB, Database Gundam');
    })
    .catch((err) => {
        console.error(err);
    });

//j'écoute sur le port défini plus haut
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });