const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    isFixed: {
        type: Boolean,
        default: false
    }
})

const Report = mongoose.model('Report', reportSchema)

module.exports = Report