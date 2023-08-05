// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/user.js');

//import module 'bcrypt'
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

        var query = {email: email}; //took off password: pw from query

        var projection = 'email password username description account_type';

        var response = await db.findOne(User, query, projection);
        var dbPass = await db.findOne(User, query, 'password');

        if(response != null) {
            bcrypt.compare(pw, dbPass.password, function(error, equal){
                if(equal){
                    localStorage.setItem('email', req.body.email);
                    res.redirect('/user_profile');
                    console.log('Password is valid and user is logged in.');
                }else{
                    res.render('login', {error: "Email does not exist or password does not match."});
                    console.log('bcrypt.compare() returned false. Password is not valid and user is not logged in.');
                }
            })
            
        } else {
            res.render('login', {error: "Email does not exist or password does not match."});
        }
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

        var hashPass = await bcrypt.hash(pw, saltRounds);
        pw = hashPass;

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
            } else {res.render('register', {error: "Could not insert email into database."});}
        } else {res.render('register', {error: "Email already exists."});}
    }
}

module.exports = securityController;