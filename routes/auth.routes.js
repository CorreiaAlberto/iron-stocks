const {
  Router
} = require("express")
const bcrypt = require("bcryptjs")
const User = require("../models/User-model")
const saltRounds = 10
const mongoose = require("mongoose")

const router = new Router()

router.get("/signup", (req, res) => res.render("auth/signup"))
router.get("/userProfile", (req, res) => res.render("auth/users/user-profile"))

router.post("/signup", (req, res) => {

  const {
    username,
    email,
    password
  } = req.body
  //comprobracion de que todods los campos han sido introducidos
  if (!username || !email || !password) {
    res.render("auth/signup", {
      errorMessage: "Los campos username, email y contraseña son obligatorios"
    })
    return
  }
  //Validacion password fuerte
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {

    res.status(500).render('auth/signup', {
      errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.'
    });

    return;

  }

  // Encriptacion de la password
  bcrypt.genSalt(saltRounds)
    .then(salt => bcrypt.hash(password, salt))
    .then(hashedPassword => {
      console.log("La hash es", hashedPassword)
      //Crear usuario 
      User.create({
          username: username,
          email: email,
          passwordHash: hashedPassword
        })
        .then(data => {
          console.log("Usuario creado con exito. Datos:", data)
          res.redirect("/userProfile")
        })
        .catch(error => {
          //Error de validacion
          if (error instanceof mongoose.Error.ValidationError) {
            res.status(400).render('auth/signup', {
              errorMessage: error.message
            });
            //Error de duplicidad
          } else if (error.code === 11000) {
            res.status(400).render('auth/signup', {
              errorMessage: 'username o correo ya existen...'
            });

          } else {
            next(error);
          }

        })

    })

})

module.exports = router;