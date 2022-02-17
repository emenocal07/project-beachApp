const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const User = require("./../models/User.model");
const saltRounds = 10;

// Signup form (render)
router.get("/registro", (req, res, next) => res.render("auth/signup-form"));

// Signup form (handle)
router.post("/registro", (req, res, next) => {
  const { username, email, userPwd, image } = req.body;
  console.log(req.body);
  bcryptjs
    .genSalt(saltRounds)
    .then((salt) => bcryptjs.hash(userPwd, salt))
    .then((hashedPassword) => {
      return User.create({ ...req.body, password: hashedPassword });
    })
    .then(() => res.redirect("/iniciar-sesion"))
    .catch((error) => next(error));
});

// Login form (render)
router.get("/iniciar-sesion", (req, res, next) =>
  res.render("auth/login-form")
);

// Login form (handle)
router.post("/iniciar-sesion", (req, res, next) => {
  const { email, userPwd } = req.body;

  if (email.length === 0 || userPwd.length === 0) {
    res.render("auth/login-form", {
      errorMessage: "Por favor, rellena todos los campos",
    });
    return;
  }

  User.findOne({ email }).then((user) => {
    if (!user) {
      res.render("auth/login-form", {
        errorMessage: "Email no registrado en la Base de Datos",
      });
      return;
    }

    if (bcryptjs.compareSync(userPwd, user.password) === false) {
      res.render("auth/login-form", {
        errorMessage: "La contraseña es incorrecta",
      });
      return;
    } else {
      req.session.currentUser = user;
      req.app.locals.currentLoggedUser = req.session.currentUser
      req.app.locals.isLoggedIn = true
      console.log("session", req.session, user);
      res.redirect(`/perfil/${(req.session, user.id)}`);
    }
  });
});

// Logout
router.get("/cerrar-sesion", (req, res, next) => {
  req.app.locals.currentLoggedUser = undefined
  req.app.locals.isLoggedIn = false
  req.session.destroy(() => res.render("session-closed"));
});

module.exports = router;
