const session = require('express-session');

// Todas las configuraciones necesarias a la creacion de una sesion
module.exports = app => {
  app.use(
    session({
      secret: process.env.SESS_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 60*60*1000 } //60* 60 * 1000 ms === 1 hora
    })
  );
};