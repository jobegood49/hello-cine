const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', (req, res, next) => {
  Movie.find({})
    .then(movies => {
      res.render('movies', { movies });
    })
    .catch(err => {
      console.log('Something went wrong', err);
    });
});

router.post('/', (req, res, next) => {
  const body = req.body;
  Movie.create({
    title: body.title,
    director: body.director,
    stars: body.stars,
    image: body.image,
    description: body.description,
    showtimes: body.showtimes,
  })
    .then(() => res.status(200).json({ success: true }))
    .catch(err => res.status(401).json({ message: 'movie not added' }));
});

/* Aquí con get creamos la ruta y le decimos que encuentre(find) todas las peliculas.
Usamos una promesa con su then y su catch por si hay error. En el caso de éxito, renderiza la vista movies, {peliculas como variable}
 */

router.get('/:id', (req, res, next) => {
  Movie.findById({ _id: req.params.id })
    .then(movies => {
      res.render('movie', { movies });
    })
    .catch(err => {
      console.log('Something went wrong', err);
    });
});

module.exports = router;
