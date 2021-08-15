// Schemas are done using mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose
const vaccinationSchema = new Schema({
    gender: {
        type: String,
        required: true
    },
    sourceBottle: {
        type: String,
        required: true
    },
    injected: {
        type: Date,
        required: true
    },
})


const vaccination =  mongoose.model('Vaccination', vaccinationSchema)
module.exports = vaccination

