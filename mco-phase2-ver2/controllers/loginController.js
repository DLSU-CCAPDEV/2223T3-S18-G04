// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/user.js');

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

const loginController = {
    getLogin: function (req, res) {
        localStorage.clear();
        res.render('login');
    },

    postLogin: async function (req, res) {
        var email = req.body.email;
        var pw = req.body.password;

        var query = {email: email, password: pw};

        var projection = 'email password username description account_type';

        var response = await db.findOne(User, query, projection);

        console.log(response);

        if(response != null) {
            localStorage.setItem('email', req.body.email);
            res.redirect('/user_profile');

        } else {res.render('error');}
    }
}

module.exports = loginController;