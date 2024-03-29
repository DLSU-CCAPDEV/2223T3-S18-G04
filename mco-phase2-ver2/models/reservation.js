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

    seatnum: {
        type: Array,
        required: [true, "seat nummber is required"]
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
    },

    markasDone: {
        type: Boolean,
        required: [true, "Marking of completion is required"]
    }
});

module.exports = mongoose.model('Reservation', registerSchema);
