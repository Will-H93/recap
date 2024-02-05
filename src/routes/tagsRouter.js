const express = require('express')
const tagsController = require('../controllers/tagsController')

const router = express.Router()

router
    .route('/')
    .post(tagsController.createTag)

module.exports = router