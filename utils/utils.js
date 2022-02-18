const mongoose = require("mongoose");

const capitalized = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

const isAdmin = (user) => user.role === "ADMIN";

const isUser = (id, userid) => id === userid;

const isLogged = (user) => user

const filterAttr = (attr, search) => {
  if (
    attr.attributes.Nombre.toLocaleLowerCase() ===
    (search || "").toLocaleLowerCase()
  ) {
    return true;
  }
  if (
    attr.attributes.Provincia.toLocaleLowerCase() ===
    (search || "").toLocaleLowerCase()
  ) {
    return true;
  }
  if (
    attr.attributes.Comunidad_.toLocaleLowerCase() ===
    (search || "").toLocaleLowerCase()
  ) {
    return true;
  }
  return false;
};

<<<<<<< HEAD
module.exports = { isUser, isLogged, isAdmin, capitalized, filterAttr };
=======

function canEdit(req, userId) {
  const isOwner = isUser(userId, req.session.currentUser._id);
  const isLoggedAdmin = isAdmin(req.session.currentUser);
  return isOwner || isLoggedAdmin;
}

// En la ruta hay q llamar a esta función, y serán los valores id y req.session.currentUser._id para luego comparar en la ruta

module.exports = { isUser, isLogged, isAdmin, capitalized, filterAttr, canEdit };
>>>>>>> cdb2cb1b7b43d4a9a1d0739195cb22ff055bd22a
