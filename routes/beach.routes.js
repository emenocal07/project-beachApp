const router = require("express").Router();
const { isLoggedIn } = require("../middleware/routeguard");
const Review = require("../models/Review.model");
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

//Get beach details & reviews
router.get("/detalles/:id", (req, res, next) => {
  const { id } = req.params;

  const beachPromise = BeachAPI.getFullList();
  const reviewPromise = Review.find({ beach: id }).populate("author");

  Promise.all([beachPromise, reviewPromise]).then((values) => {
    const foundBeaches = values[0];
    const foundReviews = values[1]
      .map(r => ({
        author: r.author.profile.name,
        content: r.content,
        date: r.date.toLocaleString()
      }))
      .reverse();

    const oneBeach = foundBeaches.data.features.filter(
      (elm) => elm.attributes.Identifica == id
    );

    res.render("beaches/beach-details", { beach: oneBeach[0], foundReviews });
  });
});

// Beach map
router.get("/detalles/:id", (req, res, next) =>
  res.render("beaches/beach-details")
);

//Add reviews
router.get("/detalles/:id", (req, res, next) => res.render("/detalles/:id"));

router.post("/detalles/:id", isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  const { content } = req.body;

  Review.create(
    { author: req.session.currentUser._id, beach: id, content, date: new Date() },
    { new: true }
  )
    .then(() => res.redirect(`/playa/detalles/${id}`))
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
console.log('AQUIIIIIIIIIIIIIIIIIII', process.env)

module.exports = router;
