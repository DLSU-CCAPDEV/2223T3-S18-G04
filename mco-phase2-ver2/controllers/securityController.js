// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/user.js');

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

const securityController = {
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

        if(response != null) {
            localStorage.setItem('email', req.body.email);
            res.redirect('/user_profile');

        } else {res.render('error');}
    },
    
    getRegister: function (req, res) {
        localStorage.clear();
        res.render('register');
    },

    postRegister: async function (req, res) {
        var email = req.body.email;
        var pw = req.body.password;
        var name = req.body.username;
        var desc = req.body.description;
        var type = req.body.account_type;

        var user = {
            email: email,
            password: pw,
            username: name,
            description: desc,
            account_type: type
        }

        var query = {email: user.email};
        var projection = 'email'

        var duplicate = await db.findOne(User, query, projection);
        
        if(duplicate == null) {
            var response = await db.insertOne(User, user);
            if(response != null) {
                localStorage.setItem('email', req.body.email);
                res.redirect('/user_profile');
            } else {res.render('error');}

        } else {res.render('error');}
    }
}

module.exports = securityController;