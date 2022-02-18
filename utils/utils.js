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

module.exports = { isUser, isLogged, isAdmin, capitalized, filterAttr };
