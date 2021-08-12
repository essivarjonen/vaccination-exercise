const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const homeController = require('./controllers/homeController')


mongoose.Promise = global.Promise
mongoose.connect(
    "mongodb://localhost:27017/vaccination_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })

mongoose.set("useCreateIndex", true)

const db = mongoose.connection

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!")
})





app.listen(port, () => {
    console.log(`Listening port ${port}`)
})