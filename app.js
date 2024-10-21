const express = require("express");
const session = require("express-session");
const path = require("path");
const logger = require("morgan");
const dotenv = require("dotenv");
const googleAuth = require("./routes/index"); 
const { Connect } = require("./config/connect");
const cors = require("cors");
const passport = require("passport");
const bookRouter = require("./routes/bookRoute");


const app = express();

// Configuration de CORS
app.use(cors({
  origin: "http://localhost:3000", // Autoriser le frontend
  credentials: true // Autoriser les cookies
}));

// Configuration des sessions Express
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Configuration de dotenv
dotenv.config();
Connect(); // Connexion à la base de données

// Configuration de Morgan pour le logging
app.use(logger("dev"));

// Middleware pour analyser le JSON et les données URL
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialisation de Passport
app.use(passport.initialize());
require("./auth/google-auth")(passport); // Assurez-vous que la stratégie Google est initialisée

// Utilisation des routes
app.use("/", googleAuth); // Doit être avant les autres routes
app.use("/book", bookRouter);


// Configuration des fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

// Exportation de l'application
module.exports = app;
