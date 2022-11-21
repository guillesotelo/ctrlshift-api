const express = require('express')
const router = express.Router()

const userRoutes = require('./user')
const movementRoutes = require('./movement')
const ledgerRoutes = require('./ledger')
const reportRoutes = require('./report')

router.use('/movement', movementRoutes)
router.use('/user', userRoutes)
router.use('/ledger', ledgerRoutes)
router.use('/report', reportRoutes)

module.exports = router