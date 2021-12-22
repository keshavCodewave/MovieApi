const express = require('express')
const router = express.Router()
const movies = require('./src/controllers/movieController')
const auth = require('./src/controllers/auth')
const { application } = require('express')

router.use('/movie', movies)
router.use('/auth', auth)

module.exports = router
