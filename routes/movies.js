const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/", (req, res, next) => {
  Movie.find({})
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(err => {
      console.log("Something went wrong", err);
    });
});
/* Aquí con get creamos la ruta y le decimos que encuentre(find) todas las peliculas.
Usamos una promesa con su then y su catch por si hay error. En el caso de éxito, renderiza la vista movies, {peliculas como variable}
 */

router.get("/:id", (req, res, next) => {
  Movie.findById({ _id: req.params.id })
    .then(movies => {
      res.render("movie", { movies });
    })
    .catch(err => {
      console.log("Something went wrong", err);
    });
});

module.exports = router;