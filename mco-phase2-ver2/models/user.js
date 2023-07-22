const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fs = require('fs');

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    username: {
        type: String,
        required: [true, "username is required"]
    },
    description: {
        type: String,
        required: [false, "description is not required"]
    },
    account_type: {
        type: String,
        required: [true, "account type is required"]
    },
    profile_pic: {
        type: String, 
        default: fs.readFileSync('./public/images/default_profile.png').toString('base64')
    }
});

module.exports = mongoose.model('User', UserSchema);