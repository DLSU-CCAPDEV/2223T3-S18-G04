// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/user.js');



const registerController = {
    getRegister: function (req, res) {
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

        console.log(user);

        var query = {email: user.email};
        var projection = 'email'

        var duplicate = await db.findOne(User, query, projection);

        console.log(duplicate); 
        
        if(duplicate == null) {
            var response = await db.insertOne(User, user);
            if(response != null) {
                res.redirect('/user_profile?email=' + req.body.email);
            } else {res.render('error');}

        } else {res.render('error');}
    }
}

module.exports = registerController;