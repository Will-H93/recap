const { Router } = require('express')
const helmet = require('helmet')

const appHelmet = new Router()

appHelmet.use(helmet())

module.exports = appHelmet