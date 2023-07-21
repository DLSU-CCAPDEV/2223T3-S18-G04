const mongoose = require("mongoose");

const Schema =  mongoose.Schema;

const registerSchema = new Schema({

    username: {
        type: String,
        required: [true, "username is required"]
    },

    labnum: {
        type: Number,
        required: [true, "lab number is required"]
    },

    seatnum: {
        type: Number,
        required: [true, "seat nummber is required"]
    },

    requestDateTime: {
        type: Date,
        required: [true, "request date and time is required"]
    },

    reserveDateTime: {
        type: Date,
        required: [true, "reservation date and time is required"]
    },
})