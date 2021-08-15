const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const mongoose = require('mongoose')

const order = require('./models/order')
const vaccination = require('./models/vaccination')


mongoose.Promise = global.Promise
mongoose.connect(
    "mongodb+srv://admin:QsHHQglXfqcqMyla@cluster0.vywdv.mongodb.net/vaccination_db", {
    useNewUrlParser: true,
    useCreateIndex: true
    })

mongoose.set("useCreateIndex", true)

const db = mongoose.connection

app.use(cors())
app.use(express.json())
app.use(
    express.urlencoded({
      // telling the Express.js to use body-parser for processing URL-encoded and JSON parameters
      extended: false
    })
  )

try {
    db.once("open", () => {
     console.log("Successfully connected to MongoDB using Mongoose!")
})} catch(err) {
     console.log(`Failed to connect MongoDB: ${err}`)
}


app.get('/orders', (req, res) => {
    order.find({ })
    .then((data) => {
        console.log('Data:', data)
        res.json(data)
    })
})

app.get('/vaccinations', (req, res) => {
    vaccination.find({ })
    .then((data) => {
        console.log('Data:', data)
        res.json(data)
    })
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})