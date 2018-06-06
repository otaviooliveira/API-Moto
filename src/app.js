const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://otaviounifeob:otavio852@ds255265.mlab.com:55265/express-api-demo')

// configura app para usar bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/moto', require('./routes/motoRoute'))

module.exports = app