const router = require("express").Router();
//const Review = require('../models/Review.model')
const APIHandler = require("../services/api-handler.js");
const { filterAttr } = require("../utils/utils.js");
const BeachAPI = new APIHandler();

// Get full list
router.get("/listado", (req, res, next) => {
  let page = parseInt(req.query.pagina) || 0;

  BeachAPI.getPaged(page)
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
router.get("/detalles/:id", (req, res, next) =>
  res.render("beaches/beach-details")
);

//Add reviews
router.get("/detalles/:id", (req, res, next) => res.render("/detalles/:id"));

router.post("/detalles/:id", (req, res, next) => {
  const { author, beach, content, date, rating } = req.params;

  Review.create({ author, beach, content, date, rating })
    .then(() => res.redirect("/detalles/:id"))
    .catch((err) => console.log(err));
});

// Search-form by name

router.post("/buscar/resultados/nombre", (req, res, next) => {
  const { search } = req.body;

  BeachAPI.getByNameLike(search.toLocaleLowerCase()).then((allbeaches) => {
    const results = allbeaches.data.features;
    res.render("search/search-result", { results });
  });
});

// General results
router.post("/buscar/resultados", (req, res, next) => {
  const { search } = req.body;

  BeachAPI.getFullList().then((allbeaches) => {
    const results = allbeaches.data.features.filter((elm) =>
      filterAttr(elm, search)
    );

    res.render("search/search-result", { results });
  });
});




// router.post("/buscar/resultados/nombre", (req, res, next) => {
//   const { search } = req.body;

//   const search1Promise = BeachAPI.getByNameLike(search.toLocaleLowerCase());

//   const search2Promise = BeachAPI.getByProvinceLike(search.toLocaleLowerCase());

//   Promise.all([search1Promise, search2Promise]).then((values) => {
//     const results = values.data.features;
//     res.render("search/search-result", { results: results });
//   });
// });

module.exports = router;
