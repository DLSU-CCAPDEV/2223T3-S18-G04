// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/user.js');

// import module `Reservation` from `../models/reservation`
const Reservation = require('../models/reservation.js');

const fs = require('fs');

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

const profileController = {
    getProfile: async function (req, res) {
        if(req.query.email != null) {
            var query = {email: req.query.email};
        } else {var query = {email: localStorage.getItem('email')};}

        var projection = 'email username description account_type profile_pic';

        var result = await db.findOne(User, query, projection);

        if(result != null) {
            var details = {
                email: result.email,
                username: result.username,
                description: result.description,
                account_type: result.account_type,
                profile_pic: result.profile_pic
            }

            res.render('user_profile', details);
        } else {res.render('user_profile', {error: "Could not find user in database."});}
    },

    getEditAccount: async function (req, res) {
        var query = {email: localStorage.getItem('email')};
        var projection = 'username description';

        var result = await db.findOne(User, query, projection);

        if(result != null) {
            var details = {
                username: result.username,
                description: result.description,
            }

            res.render('edit_account', details);
        } else {res.render('edit_account', {error: "Could not find user in database."});}
    },

    postEditAccount: async function (req, res) {
        var filter = {email: localStorage.getItem('email')};
        var update = {username: req.body.name, description: req.body.desc};

        var result = await db.updateOne(User, filter, update);

        if(result != null) {
            res.redirect('/user_profile');
        } else {res.render('edit_account', {error: "Could not update the database"});}
    },

    getEditPfp: async function (req, res) {
        res.render('edit_pfp');
    },

    postEditPfp: async function (req, res) { 
        var filter = {email: localStorage.getItem('email')};
        
        var dest = req.file.destination;
        var name = req.file.filename;
        var imageBuffer = fs.readFileSync(dest + '/' + name);
        var base64image = imageBuffer.toString('base64');
        var update = {profile_pic: base64image};

        var result = await db.updateOne(User, filter, update);

        if(result != null) {
            fs.unlinkSync(dest + '/' + name);
            res.redirect('/user_profile');
        } else {res.render('edit_pfp', {error: "Could not update the database."});}
    },

    getDeleteAccount: async function (req, res) {
        res.render('delete_account');
    },

    postDeleteAccount: async function (req, res) {
        var conditions = {email: localStorage.getItem('email')};

        var result = await db.deleteOne(User, conditions);

        if(result != null) {
            await db.deleteMany(Reservation, conditions);
            res.redirect('/login');
        } else {res.render('delete_account', {error: "Could not update the database."});}
    },

    getSearchAccount: async function (req, res) {
        debugger;
        var query = {username: req.query.username};
        var projection = 'username email'

        var result = await db.findMany(User, query, projection);
        res.send(result);
    }
}

module.exports = profileController;