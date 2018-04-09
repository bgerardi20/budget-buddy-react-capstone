"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const goalSchema = new mongoose.Schema({
    description: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    budgeted: {
        type: String,
        required: false
    },
    actual: {
        type: String,
        required: false
    },
    userId: {
        type: String,
        required: false
    }
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
