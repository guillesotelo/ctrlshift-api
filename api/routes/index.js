const express = require('express')
const router = express.Router()

const userRoutes = require('./user')
const movementRoutes = require('./movement')
const ledgerRoutes = require('./ledger')
const reportRoutes = require('./report')
const { verifyToken } = require('../helpers')

router.use('/user', userRoutes)
router.use('/movement', verifyToken, movementRoutes)
router.use('/ledger', verifyToken, ledgerRoutes)
router.use('/report', verifyToken, reportRoutes)

module.exports = router