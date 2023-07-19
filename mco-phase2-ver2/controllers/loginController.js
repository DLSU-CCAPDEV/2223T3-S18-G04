// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/user.js');



const loginController = {
    getLogin: function (req, res) {
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
            res.redirect('/user_profile?email=' + req.body.email);

        } else {res.render('error');}
    }
}

module.exports = loginController;