const mongoose = require("mongoose");

const Schema =  mongoose.Schema;

const registerSchema = new Schema({

    email: {
        type: String,
        required: [true, "email is required"]
    },

    username: {
        type: String,
        required: [true, "username is required"]
    },

    labnum: {
        type: Number,
        required: [true, "lab number is required"]
    },

    seat: {
        type: Array,
        required: [true, "seat number is required"]
    },

    requestDateTime: {
        type: String,
        required: [true, "request date and time is required"]
    },

    reserveDateTime: {
        type: String,
        required: [true, "reservation date and time is required"]
    },

    isAnonymous: {
        type: Boolean,
        required: [true, "anonymity setting is required"]
    }
});

module.exports = mongoose.model('Reservation', registerSchema);
