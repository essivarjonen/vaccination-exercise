// Schemas are done using mongoose
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
        type: Date,
        required: true
    },
    vaccine: {
        type: String,
        required: true
    },
})

const order =  mongoose.model('Order', orderSchema)
module.exports = order