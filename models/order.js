const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
const { Schema } = mongoose
const orderSchema = new Schema({
    healthCareDistrict: {
        type: String,
        required: true
    },
    orderNumber: {
        type: Number,
        required: true
    },
    responsiblePerson: {
        type: String,
        required: true
    },
    injections: {
        type: Number,
        required: true
    },
    arrived: {
        type: Timestamp,
        required: true
    },
    vaccine: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Order', orderSchema)