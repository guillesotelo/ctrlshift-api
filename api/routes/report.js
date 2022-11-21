const express = require('express')
const router = express.Router()
const { Report } = require('../db/models')

//Get all Reports
router.get('/getAll', async (req, res, next) => {
    try {
        const reports = await Report.find().sort([['date', 'descending']])
        if (!reports) return res.status(404).send('No reports found.')

        res.status(200).json(reports)
    } catch (err) {
        console.error('Something went wrong!', err)
        res.send(500).send('Server Error')
    }
})

//Create new Report
router.post('/create', async (req, res, next) => {
    try {
        const newReport = await Report.create(req.body)
        if (!newReport) return res.status(400).send('Bad request')

        res.status(200).json(newReport)
    } catch (err) {
        console.error('Something went wrong!', err)
        res.send(500).send('Server Error')
    }
})

//Update Report Data
router.post('/update', async (req, res, next) => {
    try {
        const { _id } = req.body
        let reportData = { ...req.body }

        const updated = await Report.findByIdAndUpdate(_id, reportData, { returnDocument: "after", useFindAndModify: false })
        if (!updated) return res.status(404).send('Error updating Report.')

        res.status(200).json(updated)
    } catch (err) {
        console.error('Something went wrong!', err)
        res.send(500).send('Server Error')
    }
})

module.exports = router