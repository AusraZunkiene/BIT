const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minLength: 5,
        maxLenght: 70,
    },
    email:{
        type: String,
        required: true,
        minLength: 8,
        maxLenght:120,
    },
});

const model = mongoose.model('user', schema);

module.exports = model;