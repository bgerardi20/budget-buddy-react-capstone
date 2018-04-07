"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const budgetSchema = new mongoose.Schema({
    descritpion: {
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
    type: {
        type: String,
        required: false
    },
    userId: {
        type: String,
        required: false
    }
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
