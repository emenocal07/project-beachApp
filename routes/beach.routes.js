const router = require("express").Router();
// const BeachAPI = new APIHandler();

// Get full list

router.get("/buscar/resultados", (req, res, next) => {
  BeachAPI;
  getFullList()
    .then((allbeaches) => res.render("beaches/beach-list", allbeaches))
    .catch((err) => console.log(err));
});

module.exports = router;
