'use strict';

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: 6,
        maxlength: 25,
        required: true,
        unique: true
    },
    passHash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        minlength: 3,
        maxlength: 25,
        required: true
    },
    lastName: {
        type: String,
        minlength: 3,
        maxlength: 25,
        required: true
    },
    email: {
        type: String,
        minlength: 7,
        maxlength: 25,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        minlength: 4,
        maxlength: 6,
        required: true
    },
    role: {
        type: String,
        minlength: 4,
        maxlength: 8,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        unique: true
    }
});

const User = module.exports = mongoose.model('User', userSchema);