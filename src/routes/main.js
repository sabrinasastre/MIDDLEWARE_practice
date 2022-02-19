// Acá requerir express y el router
const express = require("express");
const router = express.Router();

// Aća  traer el controller
const mainController = require("../controllers/mainController");

//Requerir un middleware de ruta (no global) el otro está en app.js porque es global
const userValidation = require("../middlewares/userValidation");

// Acá definimos las rutas para middleware de ruta desafío 2
router.get("/", mainController.index);
router.get("/admin", userValidation, mainController.userValidation);

// Acá exportamos el resultado
module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible
