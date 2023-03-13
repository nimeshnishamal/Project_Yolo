const mongoose = require('mongoose')

const user = new mongoose.Schema({
    userCode: {
        type: String,
        required: true
    },
    userFullName: {
        type: String,
        required: true
    },
    userEmail: {
        type: Array,
        required: true
    },
    userTel: {
        type: Number,
        required: true
    },
    userBOD: {
        type: Date,
        required: true,
        default: Date.now
    },
    userDescription: {
        type: String
    },
    isUserHavePreviousExperenceInYolo: {
        type: String,
        required: true
    },
    isUserEstonianCitizen: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user', user)