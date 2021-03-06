const router = require("express").Router();
const { isLoggedIn, checkRole } = require("../middleware/routeguard");
const User = require("../models/User.model");
const { isUser, isAdmin, isLogged, canEdit } = require("../utils/utils");

// Get full users list
router.get(
  "/usuarios/listado",
  isLoggedIn,
  checkRole("ADMIN"),
  (req, res, next) => {
    User.find()
      .then((users) =>
        res.render("user/list-of-users", {
          users,
          isAdmin: isAdmin(req.session.currentUser),
        })
      )
      .catch((err) => console.log(err));
  }
);

// Get user's profile
router.get("/perfil/:id", (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => {
      res.render("user/user-profile", {
        user,
        isLogged: isLogged(req.session.currentUser),
        canEdit: canEdit(req, id),
        isAdmin: isAdmin(req.session.currentUser),
      });
    })
    .catch((err) => console.log(err));
});

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
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
});

// Delete user if admin
router.post("/perfil/delete/:id", isLoggedIn, (req, res, next) => {
  const { id } = req.params;

  User.findByIdAndDelete(id)

    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
});

module.exports = router;
