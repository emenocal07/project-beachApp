const router = require("express").Router();
const APIHandler = require("../services/api-handler.js");
const BeachAPI = new APIHandler();

// Get full list
router.get("/listado", (req, res, next) => {

  let page = parseInt(req.query.pagina) || 0;

  BeachAPI
    //.getFullList()
    .getPaged(page)
    .then((allbeaches) => {
      // console.log(allbeaches.data.features[600].attributes)
      res.render("beaches/beach-list", { beach: allbeaches.data.features, nextPage: page+1 })
    })
    .catch((err) => console.log(err));
});


//Get one beach details
router.get("/detalles/:id", (req, res, next) => {

  const { id } = req.params
  BeachAPI
    .getFullList()
    .then((allbeaches) => {
      const oneBeach = allbeaches.data.features.filter(elm => elm.attributes.Identifica == id)
      console.log(oneBeach[0].attributes.Nombre)
      res.render("beaches/beach-details", { beach: oneBeach[0] })
    })
    .catch((err) => console.log(err));
});

// Beach map
router.get("/detalles/:id", (req, res, next) => res.render('beaches/beach-details'))











module.exports = router;

