const Movie = require('../models/Movie');

class movieController {
  createMovie(req, res, cb) {
    const body = req.body;
    Movie.create(
      {
        title: body.title,
        director: body.director,
        stars: body.stars,
        image: body.string,
        description: body.description,
        showtimes: body.showtimes,
      },
      function(err) {
        if (err) {
          cb(err);
        } else {
          console.log('you created a movie');
        }
      },
    );
  }
}

module.exports = movieController;
