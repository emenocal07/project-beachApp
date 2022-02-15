const mongoose = require("mongoose");

const capitalized = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

const isAdmin = (user) => user.role === "ADMIN";

const isUser = (id, userid) => id === userid;

// En la ruta hay q llamar a esta función, y serán los valores id y req.session.currentUser._id para luego comparar en la ruta

module.exports = { isUser, isAdmin, capitalized };
