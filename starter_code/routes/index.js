const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("index");
});

router.get("/movies", (req, res, next) => {
    const Movie = require("../models/Movie.js");

    Movie.find()
        .then(moviesArray => {
            res.render("movies", { movies: moviesArray });
        })
        .catch(err => {
            console.log("Error!", err);
        });
});

module.exports = router;
