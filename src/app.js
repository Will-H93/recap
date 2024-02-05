const express = require('express')
const appHelmet = require('./middlewares/helmet')
const moviesRouter = require('./routes/moviesRouter')
const usersRouter = require('./routes/usersRouter')
const reviewsRouter = require('./routes/reviewsRouter')
const tagsRouter = require('./routes/tagsRouter')

const app = express()

app.use(express.json())
app.use(appHelmet)

app.use('/movies', moviesRouter)
app.use('/users', usersRouter)
app.use('/reviews', reviewsRouter)
app.use('/tags', tagsRouter)

module.exports = app