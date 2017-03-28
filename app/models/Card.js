'use strict';

const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const Card = module.exports = mongoose.model('Card', cardSchema);