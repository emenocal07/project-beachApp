const router = require("express").Router();
const { isLoggedIn, checkRole } = require("../middleware/routeguard");
const User = require("../models/User.model");
const { isUser, isAdmin } = require("../utils/utils");

// Get full users list
router.get("/listadodeusuarios", (req, res, next) => {
  User.find()
    .then((users) => res.render("user/list-of-users", { users }))
    .catch((err) => console.log(err));
});

// Get user's profile
router.get("/perfil/:id", (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => {
      console.log(req.session.currentUser);
      res.render("user/user-profile", {
        user: req.session.currentUser,
        isAdmin: isAdmin(req.session.currentUser),
      });
    })
    .catch((err) => console.log(err));
});

// Delete user if admin
router.post("/delete/usuario/:id", isLoggedIn, (req, res, next) => {
  const { id } = req.params;

  User.findByIdAndDelete(id)

    .then(() => res.redirect("/listadeusuarios"))
    .catch((err) => console.log(err));
});

module.exports = router;
