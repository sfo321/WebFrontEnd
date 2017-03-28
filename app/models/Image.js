'use strict';

const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    imageUrl: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        minlength: 3,
        maxlength: 25,
        required: true,
        unique: true
    },
    postedBy: {
        type: String,
        minlength: 3,
        maxlength: 25,
        required: true
    }
});

const Image = module.exports = mongoose.model('Image', imageSchema);