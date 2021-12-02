const express = require('express')
const argonautRoute = require('./argonautRoute')
const router = express.Router()

router.use('/argonauts', argonautRoute)

module.exports = router
