const express = require('express')
const moviesController = require('../controllers/moviesController')

const router = express.Router()

router
    .route('/')
    .post(moviesController.createMovie)
    .get(moviesController.getMovie)

module.exports = router