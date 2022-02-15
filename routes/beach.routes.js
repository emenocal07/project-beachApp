const router = require("express").Router();
const APIHandler = require("../services/api-handler.js");
const BeachAPI = new APIHandler();

// Get full list

router.get("/listado", (req, res, next) => {
  BeachAPI.getFullList()
    .then(
      (allbeaches) => res.render("beaches/beach-list", allbeaches.data.features)
      // console.log(allbeaches.data.features.attributes.Nombre)
    )
    .catch((err) => console.log(err));
});

module.exports = router;
