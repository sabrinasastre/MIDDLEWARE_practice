//microdesafío 2

const res = require("express/lib/response");

const administradores = ["Ada", "Greta", "Vim", "Tim"];

const userValidation = (req, res, next) => {
  const { user } = req.query;
  administradores.includes(user)
    ? next()
    : res.send("No tiene permiso para ingresar");
};

//  if(administradores.includes(user)) {
// next()
//  }else{
//  res.send("No tiene permiso para ingresar")
//  }

module.exports = userValidation;
