const express = require('express')
const fs = require('fs') // eslint-disable-line global-require

const router = express.Router() // eslint-disable-line new-cap

const user = require('./controllers/user') // import user routes

router.get('/users', (req, res) => user.getUser(req, res))

module.exports = router
