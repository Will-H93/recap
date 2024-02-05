const express = require('express')
const reviewsController = require('../controllers/reviewsController')

const router = express.Router()

router
    .route('/')
    .post(reviewsController.createReview)

router
    .route('/users/:id')
    .get(reviewsController.getUsersWithReviews)

module.exports = router