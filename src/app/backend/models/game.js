const mongoose = require('mongoose')

const game = new mongoose.Schema({
    gameCode: {
        type: String,
        required: true
    },
    gameName: {
        type: String,
        required: true
    },
    gameCategory: {
        type: Array,
        required: true
    },
    gameRate: {
        type: Number,
        required: true
    },
    creationDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    gameDescription: {
        type: String
    },
    isUnauthorized: {
        type: String,
        required: true
    },
    isSuitable: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('game', game)