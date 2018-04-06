"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const goalSchema = new mongoose.Schema({
    descritpion: {
        type: String,
        required: false
    },
    date: {
        type: Number,
        required: false
    },
    budgeted: {
        type: Number,
        required: false
    },
    actual: {
        type: Number,
        required: false
    },
    difference: {
        type: Number,
        required: false
    },
    userId: {
        type: String,
        required: false
    }
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
