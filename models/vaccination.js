const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
const { Schema } = mongoose
const vaccinationSchema = new Schema({
    gender: {
        type: String,
        required: true
    },
    sourceBottle: {
        type: id,
        required: true
    },
    injected: {
        type: Timestamp,
        required: true
    },
})

module.exports = mongoose.model('Vaccination', vaccinationSchema)