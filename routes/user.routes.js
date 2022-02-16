const router = require("express").Router();
const { isLoggedIn, checkRole } = require("../middleware/routeguard");
const User = require("../models/User.model");
const { isUser, isAdmin } = require("../utils/utils");

// Get full users list
router.get("/usuarios/listado", (req, res, next) => {
  User.find()
    .then((users) => res.render("user/list-of-users", { users }))
    .catch((err) => console.log(err));
});

// Get user's profile
router.get("/perfil/:id", (req, res, next) => {
  const { id } = req.params;

  console.log(id, req.session.currentUser);
  User.findById(id)
    .then((user) => {
      console.log(req.session.currentUser);
      res.render("user/user-profile", {
        user,
        isAdmin: isAdmin(req.session.currentUser),
        isUser: isUser(req.session.currentUser._id, id),
      });
    })
    .catch((err) => console.log(err));
});

// Delete user if admin
router.post("/perfil/delete/:id", isLoggedIn, (req, res, next) => {
  const { id } = req.params;

  User.findByIdAndDelete(id)

    .then(() => res.redirect("/usuarios/listado"))
    .catch((err) => console.log(err));
});

module.exports = router;

// Edit user

router.get("/perfil/editar/:id", isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  if (
    isUser(id, req.session.currentUser._id) ||
    isAdmin(req.session.currentUser)
  ) {
    User.findById(id)
      .then((user) => {
        res.render("user/edit-user", {
          user,
          isUser: isUser(id, req.session.currentUser._id),
          isAdmin: isAdmin(req.session.currentUser),
        });
      })
      .catch((err) => console.log(err));
  }
});

router.post("/perfil/editar/:id", isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  const { username, email, name, lastName } = req.body;

  User.findByIdAndUpdate(id, { username, email, profile: { name, lastName } })
    .then(() => res.redirect("/usuarios/listado"))
    .catch((err) => console.log(err));
});
