const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var MotoSchema   = new Schema({
    marca: String,
    modelo: String,
    ano: Number,
});

module.exports = mongoose.model('Moto', MotoSchema);