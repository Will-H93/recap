const { Movie } = require('../models')

const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body)
        res.status(201).json(movie)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

const getMovie = async (req, res) => {
    const movies = await Movie.findAll()
    res.status(200).json(movies);
};

module.exports = { createMovie, getMovie }