const fs = require("fs");

//microdesafío 1
function userLogs(req, res, next) {
  fs.appendFileSync(
    "userLogs.txt",
    "El usuario ingresó a la ruta:" + req.url + "\n"
  );
  next();
}

module.exports = userLogs;
