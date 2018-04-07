"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const budgetSchema = new mongoose.Schema({
    descritpion: {
        type: String,
        required: false
    },
    date: {
        type: Date,
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
    //String or array?
    type: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: false
    }
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
