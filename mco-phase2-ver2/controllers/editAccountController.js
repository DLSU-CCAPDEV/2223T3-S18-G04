// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/user.js');

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

const editAccountController = {
    getEditAccount: async function (req, res) {
        var query = {email: localStorage.getItem('email')};
        var projection = 'username description';

        var result = await db.findOne(User, query, projection);

        if(result != null) {
            var details = {
                username: result.username,
                description: result.description,
            }

            console.log(details);

            res.render('edit_account', details);
        } else {res.render('error');}
    },

    postEditAccount: async function (req, res) {
        var filter = {email: localStorage.getItem('email')};
        var update = {username: req.body.name, description: req.body.desc};

        var result = await db.updateOne(User, filter, update);

        if(result != null) {
            res.redirect('/user_profile');
        } else {res.render('error');}
    }
}

module.exports = editAccountController;