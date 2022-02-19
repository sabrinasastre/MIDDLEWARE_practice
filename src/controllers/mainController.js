const path = require("path");
const mainController = {
  index: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
    //res.render("index.ejs")  -esto se usa si es con ejs
  },
  userValidation: (req, res) => {
    const usuario = req.query.user;
    res.send("Bienvenido a la página, " + usuario);
  },
};

module.exports = mainController;
