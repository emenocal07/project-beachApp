const router = require("express").Router();
//const Review = require('../models/Review.model')
const APIHandler = require("../services/api-handler.js");
const BeachAPI = new APIHandler();

// Get full list
router.get("/listado", (req, res, next) => {
  let page = parseInt(req.query.pagina) || 0;

  BeachAPI
    .getPaged(page)
    .then((allbeaches) => {
      res.render("beaches/beach-list", {
        beach: allbeaches.data.features,
        nextPage: page + 1,
        previousPage: page - 1,
      });
    })
    .catch((err) => console.log(err));
});

//Get beach details
router.get("/detalles/:id", (req, res, next) => {
  const { id } = req.params;
  BeachAPI.getFullList()
    .then((allbeaches) => {
      const oneBeach = allbeaches.data.features.filter(
        (elm) => elm.attributes.Identifica == id
      );
      res.render("beaches/beach-details", { beach: oneBeach[0] });
    })
    .catch((err) => console.log(err));
});

// Beach map
router.get("/detalles/:id", (req, res, next) => res.render("beaches/beach-details"));


//Add reviews
router.get("/detalles/:id", (req, res, next) => res.render("/detalles/:id"))

router.post("/detalles/:id", (req, res, next) =>{

  const {author, beach, content, date, rating} = req.params

  Review
    .create({ author, beach, content, date, rating })
    .then(() => res.redirect('/detalles/:id'))
    .catch((err)=> console.log(err))
})







// Search-form

/*
router.get("/buscar/resultados", (req, res, next) => {
  const { Nombre, Provincia, Surf } = req.query;
  console.log(req.query);
  BeachAPI.getFullList().then((allbeaches) => {
    const result = allbeaches.data.features.filter((elm) =>
      elm.attributes.includes(req.query)
    );
    res.render("search/search-result", { beaches: result });
  });
});
*/

router.post("/buscar/resultados", (req, res, next) => {
  const {name, provincia} = req.body;
  //console.log(req.body);
  BeachAPI
  .getFullList()
  console.log(name);
  console.log(provincia);
  res.status(201).json({
    message: 'It works!'
  });
});



module.exports = router;
